/**
 * 文件上传路由
 */
const router = require('koa-router')()
const multer = require('koa-multer')
const fs = require('fs')
const path = require('path')


router.prefix('/upload')

// 配置 multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // 设置文件存储路径
        const path = './public/uploads/'
        cb(null, path);
    },
    filename: function (req, file, cb) {
        // 设置文件名
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// 文件上传路由
router.post('/image', upload.single('file'), async (ctx) => {
    if (!ctx.req.file) {
        ctx.status = 400;
        ctx.body = { error: 'No file uploaded 没有文件上传' };
        return;
    }
    const publicDir = '/public'; // 您的公共目录
    const filePath = ctx.req.file.path; // 文件的实际路径

    // 构建一个相对路径，去除公共目录部分
    const relativePath = path.relative(publicDir, filePath);

    // 拼接完整的URL
    const fullUrl = `${ctx.origin}/${relativePath}`;
    
    // 处理上传的文件
    // const { originalname, filename, mimetype, path } = ctx.req.file;
    
    ctx.body = {
        message: '文件上传成功',
        file: {
            // originalname,
            // filename,
            // mimetype,
            path: fullUrl
        },
    };
});



module.exports = router




