export default function Page() {
	return (
		<div className="viewport mx-auto w-[400px] h-[300px]">
			<div className="nub-container">
				<div className="nub"></div>
				<div className="nub"></div>
			</div>
			<div className="nub-container">
				<div className="nub"></div>
				<div className="nub"></div>
			</div>
			<div className="cross"></div>
			<div className="cross"></div>
			<style
				// biome-ignore lint/security/noDangerouslySetInnerHtml: safe
				dangerouslySetInnerHTML={{
					__html: `
                        * {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                        }
                        
                        .viewport {
                            background: #352939;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    
                        .nub-container {
                        width: 80px;
                        height: 230px;
                        position: absolute;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    
                        .nub {
                            background: #A76DFF;
                            width: 100%;
                            height: 80px;
                            border-radius: 0 0 99px 99px;
                    
                            &:nth-child(2) {
                            rotate: 180deg;
                            }
                        }
                        
                        &:nth-of-type(2) {
                            rotate: 90deg;
                        }
                        }
                    
                        .cross {
                        width: 200px;
                        height: 10px;
                        position: absolute;
                        background: #FADE8B;
                    
                        &:nth-of-type(3) {
                            rotate: 45deg;
                        }
                        
                        &:nth-of-type(4) {
                            rotate: -45deg;
                        }
                        }
                    `,
				}}
			/>
		</div>
	);
}
