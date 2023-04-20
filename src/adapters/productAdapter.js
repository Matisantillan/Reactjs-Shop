export const createAdaptedProductFromFirestore = (doc) => {
	const data = doc.data();

	const productAdapted = {
		id: doc.id,
		nombre: data.nombre,
		imagen: data.imagen,
		precio: data.precio,
		categoria: data.categoria,
		descripcion: data.descripcion,
		stock: data.stock,
	};
	return productAdapted;
};
