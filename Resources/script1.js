< !DOCTYPE html >
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DIGITAL CLOCK PROBLEM-1</title>
            <html>

            </html>
            <style>
              * {
                padding: 0;
              margin: 0;
              font-family: monokai;
        }

              #screen {
                display: block;
              background: black;
              height: 100vh;
        }

              h1 {
                font - size: 30px;
              font-weight: bold;
              color: white;
              text-align: center;
        }

              #timeZone {
                display: inline-block;
              position: fixed;
              left: 35%;
              top: 30%;
              margin: auto;
        }

              #time,
              #date {
                text - align: center;
              color: white;
        }

              #time {
                font - size: 75px;
              font-weight: bold;
        }

              #date {
                font - size: 30px;
              font-weight: bold;
        }
            </style>
          </head>

          <body onload="startTime()">

            <div id="screen">

              <div id="timeZone">
                <h1> DIGITAL CLOCK</h1>
                <p id="time"> </p>
                <p id="date"></p>
              </div>
            </div>

            <script src="script1.js"></script>
          </body>

        </html>