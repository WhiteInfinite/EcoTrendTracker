function storeValues() {
    // Get the input values and store them in variables
    const solar1 = parseFloat(document.getElementById('solarInput').value);
    const fridge1 = parseFloat(document.getElementById('fridge').value);
    const light1 = parseFloat(document.getElementById('light').value);
    const fan1 = parseFloat(document.getElementById('fan').value);
    const tv1 = parseFloat(document.getElementById('tv').value);
    const ac1 = parseFloat(document.getElementById('ac').value);

    // You can now work with these variables
    console.log('Value 1:', solar1);
    console.log('Value 2:', fridge1);
    console.log('Value 3:', light1);
    console.log('Value 4:', fan1);
    console.log('Value 5:', tv1);
    console.log('Value 6:', ac1);
}


const inputValues = [20,22,18,19,21,19,20,22,23,20,19,21,22,19,18,20,21,22,19,18,20,21,23,20,19,22,24,21,19,20];
const inputValuesFridge =[2.5,3.1,2.4,2.6,3.1,2.7,2.5,2.4,3.6,2.9,2.7,2.5,2.4,2.6,2.8,2.7,2.5,2.4,2.6,2.9,2.7,2.5,2.4,2.6,2.8,2.7,2.5,2.4,2.6,2.9];
const inputValuesLight=[2.5,2.7,2.3,2.9,2.6,2.4,2.8,2.5,2.7,2.2,2.6,2.3,2.5,2.9,2.7,2.4,2.8,2.6,2.5,2.3,2.7,2.9,2.6,2.4,2.8,2.5,2.7,2.3,2.6,2.9];
const inputValuesFans=[4.5,3.7,5.2,4.9,3.2,4.8,6,4.3,3.6,5.1,4.4,3.9,5.5,4.2,6.3,4.6,3.8,5,4.7,3.4,4.1,5.3,4,3.5,5.8,4.9,3.3,4.7,5.6,4.2];
const inputValuesTv=[0.78,0.72,0.85,0.93,0.66,0.75,0.8,0.87,0.69,0.71,0.74,0.82,0.79,0.88,0.91,0.68,0.73,0.77,0.7,0.86,0.95,0.81,0.76,0.92,0.84,0.67,0.7,0.89,0.73,0.83];
const inputValuesAc=[12.5,11.8,13.2,12.1,11.5,14,13.7,12.9,15,11.8,13.5,12.3,12.7,11.9,13,11.4,13.8,12.6,12,12.4,13.6,11.7,15,13.3,12.5,11.6,15,13.1,11.2,13.4];
const ConsumptionValues=[22.78,22.02,23.95,23.43,21.06,24.65,25.8,22.97,25.59,22.71,23.94,21.82,23.89,22.48,25.71,21.78,23.63,23.37,22.5,21.86,24.05,23.21,24.76,22.72,24.74,22.37,24.2,23.39,22.73,24.23];
const totalCost=[170.85,165.15,179.625,175.725,157.95,184.875,193.5,172.275,191.925,170.325,179.55,163.65,179.175,168.6,192.825,163.35,177.225,175.275,168.75,163.95,180.375,174.075,185.7,170.4,185.55,167.775,181.5,175.425,170.475,181.725];
const effectiveCost=[20.85,0.15,44.625,33.225,0.45,42.375,43.5,7.275,19.425,20.325,37.05,6.15,14.175,26.1,57.825,13.35,19.725,10.275,26.25,28.95,30.375,16.575,13.2,20.4,43.05,2.775,1.5,17.925,27.975,31.725];

const chartSolar= inputValues.slice(inputValues.length-30,inputValues.length);
console.log(chartSolar);


function printArr(inputValues){
    // Check if there are enough input values
    if (inputValues.length < 2) {
      alert("Please provide at least two input values for prediction.");
      return;
    }

    // Perform a simple linear regression prediction
    const n = inputValues.length;
    const xSum = inputValues.reduce((acc, val) => acc + val, 0);
    const ySum = inputValues.reduce((acc, val, i) => acc + val * (i + 1), 0);
    const xSquaredSum = inputValues.reduce((acc, val, i) => acc + val * val * (i + 1), 0);

    const slope = (n * ySum - xSum * ((n * (n + 1)) / 2)) / (n * xSquaredSum - xSum * xSum);
    const nextValue = inputValues[n - 1] + slope;

    return eval(nextValue.toFixed(2));
  }
  const solar=printArr(inputValues);
  console.log(solar);

  const fridge=printArr(inputValuesFridge);
  console.log(fridge);
  const light=printArr(inputValuesLight);
  console.log(light);
  const fans=printArr(inputValuesFans);
  console.log(fans);
  const tv=printArr(inputValuesTv);
  console.log(tv);
  const ac=printArr(inputValuesAc);
  console.log(ac);
  const Consumptionpred=fridge+light+fans+tv+ac;

  const predictionSolar=inputValues.concat(solar);
  const predictionConsumption=ConsumptionValues.concat(Consumptionpred);


const lineLabels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
const lineDataset1 = {
    label: 'Solar',
    data: inputValues,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    fill: false
};
const lineDataset2 = {
    label: 'Consumption',
    data: [22.78,22.02,23.95,23.43,21.06,24.65,25.8,22.97,25.59,22.71,23.94,21.82,23.89,22.48,25.71,21.78,23.63,23.37,22.5,21.86,24.05,23.21,24.76,22.72,24.74,22.37,24.2,23.39,22.73,24.23],
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    fill: false
};

// Sample data for the pie chart
const pieLabels = ['Fridge','Lights','AC','Fans','TV'];
const pieData = [11.39049463,11.04877979,54.74556483,19.43503147,3.380129282]; // Example percentages, make sure they add up to 100

// Get the canvas elements and render the charts
const lineCtx = document.getElementById('lineChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d');

// Render line chart
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: lineLabels,
        datasets: [lineDataset1, lineDataset2]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Render pie chart
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: pieLabels,
        datasets: [{
            data: pieData,
            backgroundColor: ['rgba(255, 99, 132, 1)',   // Red for Fridge
            'rgba(255, 205, 86, 1)',   // Yellow for Lights
            'rgba(75, 192, 192, 1)',   // Teal for AC
            'rgba(54, 162, 235, 1)',   // Blue for Fans
            'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
function showpredictionChart(){
// script.js
 
    // Get the chart container and canvas element
    const chartContainer = document.getElementById('chartContainerPrediction');
    const chartCanvas = document.getElementById('myChartPrediction');

    // Toggle the chart container's visibility
    if (chartContainer.style.display === 'none') {
        chartContainer.style.display = 'block';

        // Create the chart when it's displayed
        const lineLabelspredict = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','Prediction'];
        const lineDataset1predict = {
        label: 'Solar',
        data: predictionSolar,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
            
        };
        const lineDataset2predict = {
            label: 'Consumption',
            data: predictionConsumption,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        };

        const lineCtxpred = document.getElementById('myChartPrediction').getContext('2d');

        const lineChart = new Chart(lineCtxpred, {
            type: 'line',
            data: {
                labels: lineLabelspredict,
                datasets: [lineDataset1predict, lineDataset2predict]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
    });}
 else {
        chartContainer.style.display = 'none';
    }
;}
document.getElementById('predictionButton').addEventListener('click', showpredictionChart);


function showcostChart()
{
    // Get the chart container and canvas element
    const chartContainer = document.getElementById('chartContainerCost');
    const chartCanvas = document.getElementById('myChartCost');

    // Toggle the chart container's visibility
    if (chartContainer.style.display === 'none') {
        chartContainer.style.display = 'block';

        // Create the chart when it's displayed
        const lineLabelscost = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','Prediction'];
        const lineDataset1cost = {
        label: 'Total Cost',
        data: totalCost,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
            
        };
        const lineDataset2cost = {
            label: 'Effective Cost',
            data: effectiveCost,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        };

        const lineCtxpred = document.getElementById('myChartCost').getContext('2d');

        const lineChart = new Chart(lineCtxpred, {
            type: 'line',
            data: {
                labels: lineLabelscost,
                datasets: [lineDataset1cost, lineDataset2cost]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
    });}
 else {
        chartContainer.style.display = 'none';
    }
};
document.getElementById('costButton').addEventListener('click', showcostChart); 
