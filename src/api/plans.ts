import { LICENSE_SERVER_URL } from '@/constants';
import { isOpenApiError } from '@/type-guards';

export async function getPlans() {
	const url = new URL('/v1/plan', LICENSE_SERVER_URL);
	const response = await fetch(url.toString());

	const data = response.json();
	if (!response.ok && data) {
		if (isOpenApiError(data)) {
			throw new Error(data.message);
		}

		throw new Error(`${response.status}`);
	}

	return data;
}
