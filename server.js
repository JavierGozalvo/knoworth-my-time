const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

app.get('/api/salary/:monthlySalary', (req, res) => {
    const monthlySalary = parseFloat(req.params.monthlySalary);
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    const secondsInMonth = daysInMonth * 24 * 60 * 60;
    const salaryPerSecond = monthlySalary / secondsInMonth;

    res.json({ salaryPerSecond });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
