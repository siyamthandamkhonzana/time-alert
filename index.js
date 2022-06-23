// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');

const edu = document.getElementById('');
const deon = document.getElementById('');
const sunningH = document.getElementById('');
const maluti = document.getElementById('');
const hqDigital = document.getElementById('');
const hq05 = document.getElementById('');
const innov8 = document.getElementById('');

const alerts = document.getElementById('alerts');
const currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
//let seconds = currentDate.getSeconds();
const timeStr = hours + 'H00 Stats';

const renderAlert = () => {
  if (minutes == 42) {
    alert(
      timeStr +
        '\n' +
        'EDU :' +
        edu +
        '\n' +
        'Deon: ' +
        deon +
        '\n' +
        'SunningHill: ' +
        sunningH +
        '\n' +
        'Maluti: ' +
        maluti +
        '\n' +
        'HQ Digital: ' +
        hqDigital +
        '\n' +
        'HQ O5: ' +
        hq05 +
        '\n' +
        'Innov8: ' +
        innov8
    );
  }
};
renderAlert();

//setInterval(renderAlert, 1000);
