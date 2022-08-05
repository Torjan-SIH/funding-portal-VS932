import React from "react";
import { useState } from "react";
import { PopUpViewScheme,  PopUpVerifyScheme, PopUpOeDashboard } from "./popup";


export const ListFundScheme = () =>{
    const column = [
        {heading: 'S.No'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpViewScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpViewScheme>
        </div>
     )
}

//List component for Funds Dashboard page 

export const ListFundDashboard = () =>{
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpVerifyScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpVerifyScheme>
        </div>
    )
}

export const ListFundOeEvaluation = () =>{
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
        {heading: 'Status'}
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.status}</tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const ListOeDashboard = () =>{
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpOeDashboard trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpOeDashboard>
        </div>
    )
}


