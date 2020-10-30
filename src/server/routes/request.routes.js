// import "babel-polyfill";
const { Router } = require("express");
const Comment = require("../models/Comment");
const Order = require("../models/Order");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const RequestRouter = Router();

function find(array, value) {
  let msg = "";
  array.forEach((element) => {
    if (element.param === value) {
      msg = element.msg;
    }
  });
  return msg;
}

RequestRouter.post(
  "/comment",
  [
    check("email", "введите корректный email").isEmail(),
    check("phone", "введите корректный телефон").isMobilePhone("ru-RU"),
    check("name", "введите имя").not().isEmpty({ ignore_whitespace: true }),
    check("subject", "введите сообщение")
      .not()
      .isEmpty({ ignore_whitespace: true }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log(errors);
      console.log();

      if (!errors.isEmpty()) {
        return res.json({
          errors: {
            email: find(errors.array(), "email"),
            phone: find(errors.array(), "phone"),
            name: find(errors.array(), "name"),
            subject: find(errors.array(), "subject"),
          },
        });
      }
      const { name, email, phone, subject } = req.body;
      const date = new Date();
      const comment = new Comment({
        email,
        phone,
        name,
        subject,
        date,
        allowed: true,
      });
      await comment.save();
      res.status(201).json({ message: "the thing uploaded" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "something went wrong", error: error.message });
    }
  }
);

RequestRouter.post(
  "/order",
  [
    check("email", "введите корректный email").isEmail(),
    check("phone", "введите корректный телефон").isMobilePhone("ru-RU"),
    check("name", "введите имя").not().isEmpty({ ignore_whitespace: true }),
    check("goods", "выберите товар").not().isEmpty({ ignore_whitespace: true }),
    check("quantity", "укажите количество товара")
      .not()
      .isEmpty({ ignore_whitespace: true }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({
          errors: {
            email: find(errors.array(), "email"),
            phone: find(errors.array(), "phone"),
            name: find(errors.array(), "name"),
            goods: find(errors.array(), "goods"),
            quantity: find(errors.array(), "quantity"),
            additional: "",
          },
        });
      }
      const { name, email, phone, goods, quantity, additional } = req.body;
      const date = new Date();
      const order = new Order({
        email,
        phone,
        name,
        goods,
        date,
        quantity,
        additional,
      });
      await order.save();
      if (process.env.NODE_ENV === "production") {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "happybroiler1@gmail.com",
            pass: "9376228Zggff",
          },
        });
        const mailOptions = {
          from: "happybroiler1@gmail.com",
          to: ["giga@omegam.dol.ru", "gigamaximwachau@gmail.com"],
          subject: "новый заказ",
          html: `<h1>${name} сделал заказ</h1>
          <ul>
          <li>email: ${email}</li>
          <li>телефон: ${phone}</li>
          <li>товар: ${goods} в количестве: ${quantity} штук</li>
          <li>дата: ${date.toLocaleDateString()}</li>
          <li>дополнительная информация: ${additional}</li>
          </ul>`,
        };
        const mailResult = await transporter.sendMail(mailOptions);
        console.log(mailResult);
      }
      res.status(201).json({ message: "the thing uploaded" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "something went wrong", error: error.message });
    }
  }
);

RequestRouter.get("/comments", async (req, res) => {
  try {
    const { count } = req.body || 10;
    const comments = Comment.find({ allowed: true }, null, {
      sort: { date: "desc" },
    })
      .limit(count)
      .exec();
    // console.log(await comments);
    res.json({ message: "the thing uploaded", comments: await comments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
});
module.exports = RequestRouter;
