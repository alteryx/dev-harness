// Try to make sure we can also inject 3rd party JS files
// complex micro-app, may need to make remote calls

export const getTemplate = dataEnvelope => {
  return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <!-- <title><%= htmlWebpackPlugin.options.title %></title> -->
        
          <!-- Avoid caching so that the latest asset paths are always served -->
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
          <!-- Webpack will inject our app CSS bundle URLS below here automatically -->
        </head>
        
        <body>
        <script type="text/javascript">
        var dataEnvelope = ${JSON.stringify(dataEnvelope)}
        </script>
        <div id="app"></div>       
        <script type="text/javascript" src="/public/dist/vendors~main.bundle.js"></script>
        <script type="text/javascript" src="/public/dist/bundle.js"></script>
        </body>
      </html>`;
};
