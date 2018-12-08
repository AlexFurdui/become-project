function pow(x, n) {
	if (n < 0) {
		alert("negative 'n' not supported");
	} else {
		let result = 1;

		for (let i = 0; i < n; i++) {
			result *= x;
		}

		return result;
	}

}

