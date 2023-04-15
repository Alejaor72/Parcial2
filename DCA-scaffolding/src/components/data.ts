export async function traer_categorias() {
	try {
			const dcategories = await fetch('https://api.chucknorris.io/jokes/categories').then((res) => {
				return res.json();
			});
            return dcategories;
	} catch (error) {
		console.log(error);
	}
}

export async function traer_joke(name:any) {
	try {
			const djokes = await fetch(`https://api.chucknorris.io/jokes/random?category=" + name`).then((res) => {
				return res.json();
			});
            return djokes;
	} catch (error) {
		console.log(error);
	}
}