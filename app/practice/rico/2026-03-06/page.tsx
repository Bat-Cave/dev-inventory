// https://cssbattle.dev/play/faAAILKBmFayOBeS2iTI

export default function Page20260227() {
	return (
		<div className="viewport m-auto w-[400px] h-[300px]">
			<div id="box"></div>
			<style
				// biome-ignore lint/security/noDangerouslySetInnerHtml: safe
				dangerouslySetInnerHTML={{
					__html: `
                        .viewport {
                            --s: calc(100% + 30px);
                            display: grid;
                            place-content: center;
                            background: #5DC392;
                            isolation: isolate;
                        }
                        #box {
                            width: 230px;
                            height: 180px;
                            background: #D9D9D9;
                            position: relative;
                        }

                        #box::after {
                            content: '';
                            position: absolute;
                            width: var(--s);
                            height: var(--s);
                            background: #243D83;
                            z-index: -1;
                            left: 0;
                            bottom: 0;
                        }

                        #box::before {
                            content: '';
                            position: absolute;
                            width: var(--s);
                            height: var(--s);
                            background: #243D83;
                            z-index: -1;
                            top: 0;
                            right: 0;
                        }
                    `,
				}}
			/>
		</div>
	);
}
