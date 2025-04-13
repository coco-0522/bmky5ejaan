// 模拟数据库（实际项目替换为真实数据库）
const users = [];

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({ error: '用户名不能为空' });
        }

        // 记录登录信息
        users.push({
            username,
            timestamp: new Date().toISOString(),
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        });

        res.status(200).json({ username, count: users.length });
    } catch (error) {
        res.status(500).json({ error: '服务器错误' });
    }
};