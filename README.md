<div align="center">
<a href="https://jrosser.co.uk"><img src="./public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>jrosser.co.uk</h1>
<p>My personal portfolio website</p>
</div>

# Tech Stack

- [NextJS][nextjs] - UI framework
- [Vercel][vercel] - Hosting and Deployment
- [Sanity.io][sanity]: Headless CMS and Content Lake
- [TailwindCSS][tailwind] / CSS - Styling and UI
- [Umami][umami]: Analytics
- [PlanetScale][planetscale]: Database Storage for Analytics
- [Next Themes][nexttheme]: Color Theme
- [React Refractor][reactrefractor]: Syntax Highlighting

## Run Project Locally

Follow this guide to get this site runnning locally:

### Clone Repository

```js
git clone https://github.com/J-Rosser-UK/jrossercouk.git

cd jrossercouk

npm install
```

- Rename [`.env.example`][env-example] to `.env`

### Get Env variables

The secrets variables required to boot this project locally includes:

- `Project Id`
- `Dataset`
- `API Version`
- `Access Token`

These variables come from Sanity. To get them, you need to setup your own Sanity instance. Follow the steps below to do this:

### Create a new sanity project

Run the command below in a terminal to create a new Sanity project:

```js
npm create sanity@latest -- --template clean --create-project "John Doe" --dataset production
```

- **Create an account**: If you already have a Sanity account, this will automatically connect to it, if not, select a login provider from the list of options, hit `Enter` and follow the prompt to create one.
- **Choose an Output path**: Hit the `Enter` key to select the default path.
- Install the dependencies with your preferred package manager

Once completed open up the studio directory.

```js
cd john-doe

code .
```

- Navigate to the `sanity.config.ts` file in the root directory and copy the `projectId`. Now you can close the studio file.

### Update Env Variables

Open up the cloned repository and do the following:

- Set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the project id you copied earlier
- Set `NEXT_PUBLIC_SANITY_DATASET` to `production` or the dataset name you used.
- Set `NEXT_PUBLIC_SANITY_API_VERSION` to your current date in **YYYY-MM-DD** format or leave as is
- If you want to use an access token, visit [sanity.io/manage][sanity-manage] > **project name** > **API** > **Token** to create one. Once generated, copy the token and set it to `NEXT_PUBLIC_SANITY_ACCESS_TOKEN`.

> **Warning**
> If you don't want to use a token, comment it out in the [sanity.api.ts][sanity-api] file or else it will throw errors.

- Now run `npm run dev` and you can visit [http://localhost:3000][localhost] to see the project live.

By default the UI will be blank. To start adding data to the site, visit your studio at [http://localhost:3000/studio][localhost-studio] to create your own documents.

If you expereinced any issues or enquiries, please raise an issue to discuss it.

## Additional Information

Need more guidiance, check out this [tutorial][sanity-guide] that provides a step-by-step guide to setting up Sanity studio for your portfolio site.

## Build

```bash
npm run build
```

### Important files and folders

| File(s)                                        | Description                                     |
| ---------------------------------------------- | ----------------------------------------------- |
| [`sanity.config.ts`](sanity.config.ts)         | Config file for Sanity Studio                   |
| [`sanity.client.ts`](lib/sanity.client.ts)     | Config file for Sanity CLI                      |
| [`studio`](./app/studio/[[...index]]/page.tsx) | Where Sanity Studio is mounted                  |
| [`schemas`](./schemas)                         | Where Sanity Studio gets its content types from |
| [`sanity.query.ts`](./lib/sanity.query.ts)     | Groq query for Sanity Schema data               |

<!-- Link Refs -->

[nextjs]: https://nextjs.org
[vercel]: https://vercel.com
[sanity]: https://sanity.io
[tailwind]: https://tailwindcss.com
[umami]: https://umami.is
[planetscale]: https://planetscale.com/
[nexttheme]: https://github.com/pacocoursey/next-themes
[reactrefractor]: https://github.com/rexxars/react-refractor
[site]: https://jrosser.co.uk
[studio]: https://jrosser.co.uk/studio
[studio-preview]: ./public/studio.png
[site-preview]: ./public/site.png
[env-example]: ./env.example
[localhost]: http://localhost:3000
[localhost-studio]: http://localhost:3000/studio
[sanity-api]: https://github.com/J-Rosser-UK/jrosser.co.uk/blob/d526d77b3902d6339dd3eee9e95c27b7b55f3ca9/lib/sanity.api.ts#L13-L16C3
[sanity-manage]: https://sanity.io/manage
[sanity-guide]: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs

### Handy Deployment Commands

```
nvm install 18.18.1
nvm use 18.18.1

ps -ef | grep httpd | grep -v grep | awk '{print $2}' | sudo xargs kill -9

sudo rm -r .next

pm2 delete all

node --max-old-space-size=8096 node_modules/next/dist/bin/next build

pm2 start npm --name "next" -- start
```