import Image from "next/image";

export default function Page() {
	return (
		<div>
			<Image
				src="/build-pipeline.png"
				alt="Build Pipeline"
				width={1000}
				height={1000}
			/>
		</div>
	);
}
