import styled from './middle.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 5, 3],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',

        'rgba(255, 206, 86, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',

        'rgba(255, 206, 86, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export default function CourseOverview(){
    return (
        <div className={styled.courseOverviewContainer}>
            <h2 className={styled.overviewHeading}>Course Overview</h2>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className={styled.chart}>
                    <div className={styled.chartDiv}><Doughnut data={data} /></div> 
                </div>
                <div style={{width:"85%",display:"inline-block", verticalAlign: "top", paddingTop:"3.5%", paddingRight:"3.5%"}}>
                    <div className={styled.chartSection}>
                        <div className={styled.customCheckbox}>
                            <label htmlFor="colored-checkbox" style={{backgroundColor:"rgb(42,112,134)"}}></label>
                            <div className={styled.chartTitle}>Ongoing</div>
                        </div>
                        <div className={styled.customCheckbox}>
                            <label htmlFor="colored-checkbox" style={{backgroundColor:"rgb(84,140,158)"}}></label>
                            <div className={styled.chartTitle}>Pending</div>
                        </div>
                        <div className={styled.customCheckbox}>
                            <label htmlFor="colored-checkbox" style={{backgroundColor:"rgb(127,169,182)"}}></label>
                            <div className={styled.chartTitle}>Completed</div>
                        </div>
                        <div className={styled.customCheckbox}>
                            <label htmlFor="colored-checkbox" style={{backgroundColor:"rgb(169,197,206)"}}></label>
                            <div className={styled.chartTitle}>Under Review</div>
                        </div>
                    </div>

                    <div className={styled.chartInfo}>
                        <div className={styled.chartInfoBlock}>
                            <div className={styled.chartInfoValue} style={{color:"rgb(42,112,134)"}}>1</div>
                            <div className={styled.chartInfoTitle}>Ongoing Course</div>
                        </div>
                        <div className={styled.chartInfoBlock}>
                            <div className={styled.chartInfoValue} style={{color:"rgb(84,140,158)"}}>83</div>
                            <div className={styled.chartInfoTitle}>Pending Course</div>
                        </div>
                        <div className={styled.chartInfoBlock}>
                            <div className={styled.chartInfoValue} style={{color:"rgb(127,169,182)"}}>50</div>
                            <div className={styled.chartInfoTitle}>Completed Course</div>
                        </div>
                        <div className={styled.chartInfoBlock}>
                            <div className={styled.chartInfoValue} style={{color:"rgb(169,197,206)"}}>7</div>
                            <div className={styled.chartInfoTitle}>Course Under Review</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}