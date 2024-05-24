const router = require('koa-router')()

router.prefix('/auth')
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body
    if (userName && password != null) {
        ctx.body = {
            code: '200',
            data: {
                token: 'XL299LiMEDZ0H5h3A29PxwQXdMJqWyY2'
            },
            message: '登陆成功'
        }
    } else {
        ctx.body = {
            code: '300',
            message: '账号或者密码错误'
        }
    }
})

router.get('/getUserInfo', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '获取成功',
        data: {
            userId: "0",
            userName: "Soybean",
            roles: [
                "R_SUPER"
            ],
            buttons: [
                "B_CODE1",
                "B_CODE2",
                "B_CODE3"
            ]
        }
    };

});

module.exports = router