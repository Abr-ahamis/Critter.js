/**
 * Draws ONLY the black-widow body.
 * Legs, grid, ripples and audio are handled elsewhere.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x     body center X (screen space)
 * @param {number} y     body center Y (screen space)
 * @param {number} angle body heading in radians
 */
function drawSpiderBody(ctx, x, y, angle) {
    // Local helper (was this.drawNodeDot in the original class)
    const nodeDot = (px, py, radius, color = '#171014') => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
    };

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Abdomen (opisthosoma): broad, rounded and softly tapered toward
    // the spinnerets. Layered gradients create a polished exoskeleton.
    const abdomenGradient = ctx.createRadialGradient(-20, -8, 1.5, -22, 0, 23);
    abdomenGradient.addColorStop(0, '#55505A');
    abdomenGradient.addColorStop(0.16, '#29252E');
    abdomenGradient.addColorStop(0.48, '#111015');
    abdomenGradient.addColorStop(0.82, '#070709');
    abdomenGradient.addColorStop(1, '#020203');
    ctx.beginPath();
    ctx.moveTo(-8.0, -5.2);
    ctx.bezierCurveTo(-11.5, -12.8, -22.0, -16.8, -31.0, -14.4);
    ctx.bezierCurveTo(-39.0, -12.3, -43.0, -6.4, -43.5, 0);
    ctx.bezierCurveTo(-43.0, 6.4, -39.0, 12.3, -31.0, 14.4);
    ctx.bezierCurveTo(-22.0, 16.8, -11.5, 12.8, -8.0, 5.2);
    ctx.closePath();
    ctx.fillStyle = abdomenGradient;
    ctx.fill();
    ctx.strokeStyle = '#020203';
    ctx.lineWidth = 1.15;
    ctx.stroke();

    // Soft reflected light along the upper curve gives the abdomen a
    // rounded, lacquer-like surface rather than a flat black fill.
    ctx.save();
    ctx.globalAlpha = 0.62;
    const abdomenSheen = ctx.createLinearGradient(-33, -15, -13, 2);
    abdomenSheen.addColorStop(0, 'rgba(255,255,255,0.02)');
    abdomenSheen.addColorStop(0.42, 'rgba(205,195,211,0.26)');
    abdomenSheen.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.strokeStyle = abdomenSheen;
    ctx.lineWidth = 1.25;
    ctx.beginPath();
    ctx.moveTo(-37, -8.2);
    ctx.bezierCurveTo(-30, -15.2, -18, -13.4, -12, -7.2);
    ctx.stroke();
    ctx.restore();

    // Distinctive scarlet dorsal marking. The paired lobes and narrow
    // waist read as a widow-like hourglass motif from this animated view.
    ctx.save();
    ctx.shadowColor = 'rgba(180, 0, 24, 0.38)';
    ctx.shadowBlur = 4;
    const redMark = ctx.createLinearGradient(-30, -9, -19, 9);
    redMark.addColorStop(0, '#760713');
    redMark.addColorStop(0.35, '#D20E27');
    redMark.addColorStop(0.72, '#F0444F');
    redMark.addColorStop(1, '#8D0719');
    ctx.fillStyle = redMark;
    ctx.beginPath();
    // Rear lobe
    ctx.moveTo(-31.5, -8.0);
    ctx.bezierCurveTo(-36.0, -8.4, -38.2, -5.2, -35.8, -2.8);
    ctx.lineTo(-28.4, -0.9);
    // Narrow connecting waist
    ctx.lineTo(-25.9, -2.1);
    ctx.lineTo(-27.4, 0);
    ctx.lineTo(-25.9, 2.1);
    // Front lobe
    ctx.lineTo(-28.4, 0.9);
    ctx.bezierCurveTo(-36.0, 2.8, -36.0, 8.4, -31.5, 8.0);
    ctx.bezierCurveTo(-27.5, 7.6, -25.0, 4.2, -23.7, 1.7);
    ctx.bezierCurveTo(-22.4, 4.2, -19.0, 7.3, -15.8, 6.2);
    ctx.bezierCurveTo(-12.3, 4.9, -13.2, 1.7, -17.0, 0);
    ctx.bezierCurveTo(-13.2, -1.7, -12.3, -4.9, -15.8, -6.2);
    ctx.bezierCurveTo(-19.0, -7.3, -22.4, -4.2, -23.7, -1.7);
    ctx.bezierCurveTo(-25.0, -4.2, -27.5, -7.6, -31.5, -8.0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Small red lateral flecks add natural variation without turning
    // the abdomen into a cartoon pattern.
    const redFlecks = [
        [-36.0, -5.0, 1.05, 1.65, -0.35],
        [-37.0, 4.3, 0.85, 1.35, 0.25],
        [-13.8, -4.1, 0.75, 1.2, -0.3],
        [-13.7, 4.0, 0.75, 1.2, 0.3]
    ];
    redFlecks.forEach(([fx, fy, rx, ry, rotation]) => {
        ctx.beginPath();
        ctx.ellipse(fx, fy, rx, ry, rotation, 0, Math.PI * 2);
        ctx.fillStyle = '#A90B20';
        ctx.fill();
    });

    // Fine abdominal surface texture: sparse, low-contrast points and
    // a secondary highlight following the curved cuticle.
    ctx.save();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#B8AEBB';
    [
        [-18, -10, 0.42], [-23, -12, 0.32], [-29, -11, 0.38], [-34, -7, 0.3],
        [-17, 9, 0.34], [-25, 12, 0.3], [-32, 9, 0.36], [-39, 3, 0.28]
    ].forEach(([tx, ty, r]) => {
        ctx.beginPath();
        ctx.arc(tx, ty, r, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.restore();

    // Spinnerets at the rear of the abdomen.
    ctx.strokeStyle = '#08080A';
    ctx.lineWidth = 1.15;
    ctx.beginPath();
    ctx.moveTo(-42.2, -1.4); ctx.lineTo(-46.0, -2.1);
    ctx.moveTo(-43.0, 0);    ctx.lineTo(-47.0, 0);
    ctx.moveTo(-42.2, 1.4);  ctx.lineTo(-46.0, 2.1);
    ctx.stroke();
    nodeDot(-43.0, 0, 1.1, '#020203');

    // Cephalothorax (prosoma): smaller, domed and glossy black.
    const carapaceGradient = ctx.createRadialGradient(-1, -3, 0.5, 1, 0, 12);
    carapaceGradient.addColorStop(0, '#55515B');
    carapaceGradient.addColorStop(0.22, '#292630');
    carapaceGradient.addColorStop(0.62, '#111015');
    carapaceGradient.addColorStop(1, '#040406');
    ctx.beginPath();
    ctx.ellipse(1.5, 0, 10.2, 7.4, 0, 0, Math.PI * 2);
    ctx.fillStyle = carapaceGradient;
    ctx.fill();
    ctx.strokeStyle = '#020203';
    ctx.lineWidth = 1.1;
    ctx.stroke();

    // Carapace rim and a narrow central foveal groove.
    ctx.save();
    ctx.globalAlpha = 0.48;
    ctx.strokeStyle = '#8D8794';
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    ctx.arc(0.5, 0, 8.6, -2.5, 2.5);
    ctx.stroke();
    ctx.globalAlpha = 0.38;
    ctx.strokeStyle = '#050507';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(-1.5, -2.8); ctx.quadraticCurveTo(1.3, 0, -1.5, 2.8);
    ctx.stroke();
    ctx.restore();

    // Eight small glossy eyes grouped at the front of the prosoma.
    const eyePositions = [
        [8.6, -3.8, 0.88], [9.7, -2.5, 0.78], [10.1, -1.0, 0.72], [10.1, 1.0, 0.72],
        [9.7, 2.5, 0.78], [8.6, 3.8, 0.88], [7.1, -2.2, 0.65], [7.1, 2.2, 0.65]
    ];
    eyePositions.forEach(([ex, ey, er]) => {
        ctx.beginPath();
        ctx.arc(ex, ey, er, 0, Math.PI * 2);
        ctx.fillStyle = '#010102';
        ctx.fill();
        ctx.strokeStyle = '#39343E';
        ctx.lineWidth = 0.35;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex - 0.22, ey - 0.25, Math.max(0.16, er * 0.24), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.78)';
        ctx.fill();
    });

    // Dark, short pedipalps beside the mouthparts.
    ctx.strokeStyle = '#17131A';
    ctx.lineWidth = 1.55;
    ctx.beginPath();
    ctx.moveTo(8.6, -2.8); ctx.quadraticCurveTo(13.0, -5.4, 16.2, -4.4);
    ctx.moveTo(8.6, 2.8);  ctx.quadraticCurveTo(13.0, 5.4, 16.2, 4.4);
    ctx.stroke();
    nodeDot(16.2, -4.4, 1.0, '#09080B');
    nodeDot(16.2, 4.4, 1.0, '#09080B');

    // Chelicerae: two tiny dark mouthpart strokes below the eye cluster.
    ctx.strokeStyle = '#050507';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(9.2, -1.0); ctx.lineTo(12.0, -0.2);
    ctx.moveTo(9.2, 1.0);  ctx.lineTo(12.0, 0.2);
    ctx.stroke();

    ctx.restore();
}