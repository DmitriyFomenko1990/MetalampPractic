const radians = function(deg) {
    return (Math.PI/180)*deg
}
const canvas = document.querySelector('.content-room__canvas');
console.log(canvas)
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    const gradientRthDwn = ctx.createLinearGradient(120,60, 60,120);
    gradientRthDwn.addColorStop(0.9, 'rgba(102, 210, 234, 1)');
    gradientRthDwn.addColorStop(0.1, 'rgba(111, 207, 151, 1)');

    ctx.lineWidth = 4
    ctx.strokeStyle = gradientRthDwn
    ctx.arc(60, 60, 56, radians(1), radians(89) ); // Outer circle
    ctx.stroke();

    ctx.beginPath();
    const gradientLeft = ctx.createLinearGradient(60,120, 60,0);
    gradientLeft.addColorStop(1, 'rgba(255, 227, 156, 1)');
    gradientLeft.addColorStop(0, 'rgba(255, 186, 156, 1)');

    ctx.lineWidth = 4
    ctx.strokeStyle = gradientLeft
    ctx.arc(60, 60, 56, radians(91), radians(269) ); // Outer circle
    ctx.stroke();

    ctx.beginPath();
    const gradientRthTop = ctx.createLinearGradient(60,0, 120,60);
    gradientRthTop.addColorStop(0.5, 'rgba(188, 156, 255, 1)');
    gradientRthTop.addColorStop(0.99, 'rgba(139, 164, 249, 1)');

    ctx.lineWidth = 4
    ctx.strokeStyle = gradientRthTop
    ctx.arc(60, 60, 56, radians(271), radians(359) ); // Outer circle
    ctx.stroke();

}
