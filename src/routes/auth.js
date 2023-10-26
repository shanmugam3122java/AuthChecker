import puppeteer from 'puppeteer';
const auth = async() => {
    // method: "POST",
    // path: '/auth',
    // handler: async(request,h) => {
    //     console.log("auth route called", new Date())
        
            // Launch the browser and open a new blank page
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            console.log("1111111111111111111111111111");
            // Navigate the page to a URL
            await page.goto('https://kafka.incubation.sentinel.unifo.in/wss/health', {waitUntil: 'load'});
          
            await page.type('#signInFormUsername', 'uni1161');
            await page.type('#signInFormPassword', 'Unifo@12345');
            await page.keyboard.press('Enter');
            await page.waitForNavigation();
            const cookies1 = await page.cookies()
            console.log(cookies1);
            // await page.click(searchResultSelector);
    //         h.state('AWSELBAuthSessionCookie-0', '111111111');
    //         h.state('AWSELBAuthSessionCookie-1', '222222222');
    //     return h.response('Ok').code(200)
    // }
}
export default auth