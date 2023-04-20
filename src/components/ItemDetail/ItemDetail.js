import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({
	id,
	nombre,
	precio,
	imagen,
	categoria,
	stock,
	descripcion,
	amount,
}) => {
	const [qty, setQty] = useState(0);
	const { addItem, isInCart } = useContext(CartContext);
	const navigate = useNavigate();

	const handleOnAdd = (qty) => {
		setQty(parseInt(qty));
		addItem({ id, nombre, precio, qty, imagen, stock });
	};

	return (
		<>
			<div
				className="container d-flex flex-row justify-content-around pt-5 mt-5"
				style={{
					width: "80%",
				}}
			>
				<div
					className="p-2"
					style={{
						boxShadow: "-6px 7px 14px 1px #8C8C8C",
					}}
				>
					<img src={imagen} alt={nombre} />
				</div>
				<div className="p-2" style={{ width: "auto" }}>
					<h1 className="py-4">{nombre}</h1>
					<h3 className="py-3">Precio: ${precio}</h3>
					<h4 className="py-3">Categoria: {categoria}</h4>
					<h4 className="py-3">Stock: {stock}</h4>
					<br />
				</div>
			</div>
			<div className="p-3">
				{" "}
				{!isInCart(id) ? (
					qty > 0 ? (
						<div className="p-4 text-center">
							<Link
								style={{ color: "white" }}
								className="fw-bold btn btn-success m-5 px-4"
								to="/cart"
							>
								Ir al carrito
							</Link>
							<Link
								style={{ color: "white" }}
								className="fw-bold btn btn-success m-5 px-4"
								to="/"
							>
								Seguir comprando
							</Link>
						</div>
					) : (
						<ItemCount
							className="d-block mb-5"
							style={{ margin: "auto" }}
							onAdd={handleOnAdd}
							stock={stock}
						/>
					)
				) : (
					<div>
						<div
							style={{
								color: "white",
								backgroundColor: "red",
								borderRadius: "5px",
							}}
							className="mt-5 d-block mx-auto fw-bold px-4 py-2 text-center w-25"
						>
							{" "}
							El producto se encuentra en el carrito.{" "}
						</div>
						<button
							onClick={() => navigate("/cart")}
							style={{ color: "white" }}
							className="mt-5 d-block mx-auto fw-bold px-4 btn btn-warning"
						>
							Ir al carrito
						</button>
					</div>
				)}
				<br />
				<p className="fs-5 fw-semibold text-center m-5 px-5 pb-3">
					Descripcion: {descripcion}
				</p>
			</div>
		</>
	);
};
export default ItemDetail;
