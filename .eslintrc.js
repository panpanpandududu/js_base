module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
          // 强制使用一致的换行符风格
          "linebreak-style": [
              "error",
              // 强制使用 Unix 换行符： \n
              "unix"
          ],
          // 强制使用一致的反勾号、双引号或单引号 (quotes)
          "quotes": [
              "error",
              // 要求尽可能地使用单引号
              "single"
          ],
          // 要求或禁止使用分号代替 ASI (semi)
          "semi": [
              "error",
              // 要求在语句末尾使用分号
              "always"
          ],
          // 允许使用 console方法
          "no-console": "off",
          // 强制使用一致的缩进
          "indent": [
            "error",
            // 强制使用两个空格进行缩进
            2
          ],
          // 要求或禁止在注释前有空白
          "spaced-comment": [
            "error",
            // // 或 /* 必须跟随至少一个空白
            "always",
            {
            "line": {
              // 块级注释的标记
              "markers": ["/"],
              // 规则的例外
              "exceptions": ["-", "+"]
            },
            "block": {
              "markers": ["!"],
              "exceptions": ["*"],
              // /* 后必须有只上一个空白，*/之前必须至少有一个空白
              "balanced": true
            }
          }]
      },
};
