"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async finduser() {
    const ctx = this.ctx;
    const userId = ctx.query.id;
    const user = await ctx.service.home.finduser(userId);
    ctx.body = user;
  }

  async findAll() {
    const ctx = this.ctx;
    const user = await ctx.service.home.findAll();
    ctx.body = user;
  }

  async userselect() {
    const ctx = this.ctx;
    const user = await ctx.service.home.userselect();
    ctx.body = user;
  }
}

module.exports = HomeController;
