const Page = () => {
	return (
		<>
			<div className="w-[400px] h-[300px] relative isolate">
				<body
					className="overflow-hidden isol
                "
				>
					<div className="bg">
						<div className="nub1" />
						<div className="nub2" />
						<div className="nub3" />
						<div className="nub4" />
						<div className="cross1" />
						<div className="cross2" />
					</div>
				</body>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
                 .bg {
    width: 100%;
    height: 100%;
    background: #352939;
    left: 0px;
    top: 0px;
    position: absolute;
  }
  .nub1 {
    background: #A76DFF;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 0 9999px 9999px 0;
    top: 50%;
    transform: translateY(-50%);
    left: 21.25%;
  }
    .nub2 {
    background: #A76DFF;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 9999px 0 0 9999px;
    top: 50%;
    transform: translateY(-50%);
    right: -150px;
  }
    .nub3 {
    background: #A76DFF;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 0 0 9999px 9999px;
    top: -44%;
    transform: translateY(-50%);
    left: -94%
  }
    .nub4 {
    background: #A76DFF;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 9999px 9999px 0 0;
    top: 238%;
    transform: translateY(-50%);
  }
  .cross1 {
    height: 10px;
    width: 200px;
    background: #FADE8B;
    position: absolute;
    left: -75%;
    transform: translateX(-50%);
    top: -50%;
    transform: rotate(45deg);
  }
    .cross2 {
    height: 10px;
    width: 200px;
    background: #FADE8B;
    position: absolute;
    left: 0%;
    transform: translateX(-50%);
    top: 0%;
    transform: rotate(-90deg);
  }
                `,
				}}
			/>
		</>
	);
};

export default Page;
