

const indicate = {
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
}

const styles = `
     position: fixed;
    top: 1px;
    left: 1px;
    background: #0000007a;
    color: ivory;`;

const indicator = `<div style="${styles}">
                        <div> W: ${indicate.w} </div>
                        <div> H: ${indicate.h} </div>
</div>`;

document.documentElement.insertAdjacentHTML("beforeend", indicator)
