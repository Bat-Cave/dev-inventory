// https://cssbattle.dev/play/r0eoY0WsZX6OvG776V08

export default function Page() {
  return (
    <div className="viewport mx-auto w-[400px] h-[300px]">
      <div id="container">
        <span id="a" />
        <span id="b" />
        <span id="c" />
        <span id="d" />
      </div>
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: `
            .viewport {
                background: #394257;
                display: grid;
                place-content:center;
            }
            div#container {
                width: 140px;
                height: 140px;
                background: #F0CD48;
                border-radius:50%;
                position: relative;
                display: grid;
                place-content:center;
            }
            #container span {
                position: absolute;
                background:#394257;
                width: 70px;
                height: 70px;
            }
            span#a {
                transform: translate(10px,10px);
                width: 40px;
                height: 40px;
            }
            span#b {
                transform: translate(20px,20px);
            }
            span#c {
                transform: translate(50px,50px);
            }
            span#d {
                transform: translate(90px,90px);
                width: 40px;
                height: 40px;
            }
        `,
        }}
      />
    </div>
  );
}
