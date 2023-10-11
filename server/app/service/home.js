const Service = require("egg").Service;

class HomeService extends Service {
  // app.mysql 插件读取数据
  async finduser(uid) {
    const user = await this.app.mysql.get("user", { id: uid });
    return { user };
  }

  // 直接执行sql语句
  async findAll() {
    const users = await this.app.mysql.query("select * from user");
    return { users };
  }

  // 直接执行sql语句，占位符
  async userselect() {
    const name = "lsq";
    const users = await this.app.mysql.query(
      "select * from user where name = ? and address = ?",
      [name, "湖北省武汉市"]
    );
    return { users };
  }
}

module.exports = HomeService;
