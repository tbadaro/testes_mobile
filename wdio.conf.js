const allure = require('allure-commandline')
const video = require('wdio-video-reporter')


exports.config = {
    user:  process.env.SECRET_id,
    key: process.env.SECRET_key,
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.js'            
    ],
    framework: 'mocha',
    featureFlags: {
        specFiltering: true
    },
    capabilities: [{ 
        'app' : 'bs://b5f099f957cce74a36dba158c15a959b67d0d78c',  
        'device' : 'Samsung Galaxy S20 Plus',
        'os_version' : '10.0',   
        'project' : 'Projeto de cadastro de produto em Device Farm',
        'build' : '1',
        'name': 'teste_cadastro' 
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: false,       
            videoSlowdownMultiplier: 50,
        }]
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot()

    }        
}

