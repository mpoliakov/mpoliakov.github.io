const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const speed = 20;
const delta = 0.005;

const points = new Array(5);

for (let i = 0; i < points.length; i++) {
    points[i] = {
        x: width * Math.random(),
        y: height * Math.random(),
        dx: speed * Math.random() - speed / 2,
        dy: speed * Math.random() - speed / 2
    };
}

for (let i = 0; i < 3000; i++) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    let orientation = 1;

    for (let j = 1; j < points.length - 2; j++) {
        orientation = (j % 3);

        const grd = ctx.createLinearGradient(points[j + 1 - orientation].x, points[j + 1 - orientation].y, points[j + orientation].x * 1.1, points[j + orientation].y * 1.1);

        const palette = [
            {offset: 0.5, hex: '#36977C'},
            {offset: 1, hex: '#EBF552'}
        ];

        palette.forEach((color) => grd.addColorStop(color.offset, color.hex));

        ctx.fillStyle = grd;

        const xc = (points[j].x + points[j + 1].x) / 2;
        const yc = (points[j].y + points[j + 1].y) / 2;
        ctx.quadraticCurveTo(points[j].x, points[j].y, xc, yc);
        move(points[j]);
    }

    ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
    move(points[points.length - 2]);
    reset();
    ctx.fill();
}

function move(point) {
    if (point.x > width || point.x < 0) {
        point.dx *= -1;
    }

    if (point.y > height || point.x < 0) {
        point.dy *= -1;
    }

    point.x += point.dx;
    point.y += point.dy;
}

function reset() {
    let mx = 0, my = 0;

    const attrX = Math.random() * width;
    const attrY = Math.random() * height;

    for (let i = 1; i < points.length; i++) {
        mx += points[i].x;
        my += points[i].y;
    }
    mx /= points.length;
    my /= points.length;

    for (let i = 1; i < points.length; i++) {
        points[i].x += (mx - points[i].x) * delta;
        points[i].y += (my - points[i].y) * delta;
        points[i].x += (attrX - points[i].x) * delta;
        points[i].y += (attrY - points[i].y) * delta;
    }
}
