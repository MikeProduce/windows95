export const WindowsModal = () => {
    function handleOnDrag(e) {
        e.preventDefault();
        let offsetX = e.clientX - e.target.offsetLeft;
        let offsetY = e.clientY - e.target.offsetTop;

        function onMouseMove(e) {
            e.preventDefault();
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            e.target.style.left = x + "px";
            e.target.style.top = y + "px";
        }

        function onMouseUp(e) {
            e.preventDefault();
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    return (
        <div>
            <h1 draggable onDragStart={(e) => handleOnDrag(e)} className="absolute left-32 top-32">miguel</h1>
            miguel 
        </div>
    )
}