const sheet = new CSSStyleSheet();
sheet.replaceSync(`
    :host {
        display: inline-block;
        width: 100%;
        min-width: 300px;
        max-width: 600px;
        vertical-align: bottom;
        white-space: initial;
        font-family: Arial,Helvetica,"Microsoft Yahei";
        color: #333;
        container-type: inline-size;
        --primary-color: #2095f2;
        --secondary-color: #ffaa00;
        --base-size: clamp(0.8px,calc(100cqw / 600),1px);
        --base-size-mobile: clamp(0.8px,calc(100cqw / 480),1px);
    }
    *{
        padding:0;
        margin:0;
    }
    a{
        text-decoration: none;
        color:#333;
    }
    .mod-calendar {
        display: flex;
        flex-direction: row-reverse;
        padding: calc(var(--base-size) * 2);
        background: var(--primary-color);
        font-size: calc(var(--base-size) * 14);
    }
    .mod-calendar .info {
        position: relative;
        width: calc(var(--base-size) * 180);
        padding-top: calc(var(--base-size) * 15);
        text-align: center;
        color: #fff;
    }
    .mod-calendar .info a{
        color: #fff;
    }
    .mod-calendar .info p {
        line-height: calc(var(--base-size) * 20);
    }
    .mod-calendar .info .day {
        width: calc(var(--base-size) * 80);
        height: calc(var(--base-size) * 80);
        margin: calc(var(--base-size) * 15) auto;
        line-height: calc(var(--base-size) * 80);
        font-size: calc(var(--base-size) * 48);
        background: var(--secondary-color);
        color: #fff;
        border-radius: calc(var(--base-size) * 8);
    }
    .mod-calendar .info .detail{
        margin-bottom: calc(var(--base-size) * 15);
    }
    .mod-calendar .info .list{
        padding: calc(var(--base-size) * 10) 0;
        border-top: calc(var(--base-size) * 1) dotted rgba(255,255,255,0.5);
    }
    .mod-calendar .info .list .item{
        padding: calc(var(--base-size) * 5) 0;
    }
    .mod-calendar .info .list .item a{
        color: #fff;
    }
    .mod-calendar .info .list ::slotted([slot="item"]) {
        padding: calc(var(--base-size) * 5) 0!important;
    }
    .mod-calendar .box {
        flex: 1;
    }
    .mod-calendar .selector {
        position: relative;
        padding: calc(var(--base-size) * 4) calc(var(--base-size) * 6);
        background: #fff;
        vertical-align: middle;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
    }
    .mod-calendar .selector span {
        display: inline-block;
        vertical-align: middle;
        background: #fff;
        margin: 0 calc(var(--base-size) * 1);
    }
    .mod-calendar .selector a {
        float: left;
        position: relative;
        height: calc(var(--base-size) * 24);
        padding: 0 calc(var(--base-size) * 5);
        border: calc(var(--base-size) * 1) solid #ebebeb;
        background: #fafafa;
        line-height: calc(var(--base-size) * 24);
        vertical-align: middle;
    }
    .mod-calendar .selector a:hover {
        border-color: var(--secondary-color);
        color: var(--secondary-color);
    }
    .mod-calendar .selector select {
        float: left;
        min-width: calc(var(--base-size) * 60);
        height: calc(var(--base-size) * 26);
        padding-left: calc(var(--base-size) * 4);
        border: calc(var(--base-size) * 1) solid #ebebeb;
        margin: 0 calc(var(--base-size) * -1);
        background: #fff;
        line-height: calc(var(--base-size) * 24);
        vertical-align: middle;
        font-size: calc(var(--base-size) * 14);
        color: #333;
        outline: none;
    }
    .mod-calendar .selector button {
        height: calc(var(--base-size) * 26);
        border: calc(var(--base-size) * 1) solid #ebebeb;
        line-height: calc(var(--base-size) * 24);
        background: #fafafa;
    }
    .mod-calendar table {
        width: 100%;
        table-layout: fixed;
        background: #fff;
        color: #666;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .mod-calendar table tr {
        border-top: calc(var(--base-size) * 1) solid #ebebeb;
    }
    .mod-calendar table th,.mod-calendar table td {
        position: relative;
        border: calc(var(--base-size) * 1) solid #ebebeb;
        text-align: center;
    }
    .mod-calendar table th {
        line-height: calc(var(--base-size) * 30);
        font-weight: normal;
    }
    .mod-calendar table td {
        position: relative;
        line-height: calc(var(--base-size) * 20);
    }
    .mod-calendar table thead {
        background: #f8f8f8;
    }
    .mod-calendar table tbody a {
        display: block;
        position: relative;
        margin: 0 auto;
        padding: calc(var(--base-size) * 6) 0;
        border: calc(var(--base-size) * 1) solid transparent;
        line-height: calc(var(--base-size) * 20);
        cursor: pointer;
    }
    .mod-calendar table tbody a:hover {
        border: calc(var(--base-size) * 1) solid #cccccc;
    }
    .mod-calendar table tbody span {
        display: block;
    }
    .mod-calendar table tbody i {
        position: absolute;
        left: calc(var(--base-size) * 2);
        top: 0;
        line-height: calc(var(--base-size) * 20);
        font-style: normal;
        color: #fff;
    }
    .mod-calendar table .s1 {
        font-size: calc(var(--base-size) * 18);
        color: #212121;
    }
    .mod-calendar table .s2 {
        font-size: calc(var(--base-size) * 13);
        color: #757575;
    }
    .mod-calendar table td.active a {
        border: calc(var(--base-size) * 1) solid var(--secondary-color);
    }
    .mod-calendar table td.holiday a {
        background: #f1f9f1
    }
    .mod-calendar table td.holiday.active a,.mod-calendar table td.holiday a:hover{
        border: calc(var(--base-size) * 1) solid #4bae4f;
    }
    .mod-calendar table td.holiday i {
        color: #4bae4f;
    }
    .mod-calendar table td.today{
        background: var(--secondary-color);
    }
    .mod-calendar table td.today a{
        border: calc(var(--base-size) * 1) solid var(--secondary-color);
    }
    .mod-calendar table td.today .s1{
        color: #fff;
    }
    .mod-calendar table td.today .s2{
        color: rgba(255,255,255,0.8);
    }
    .mod-calendar table td.work a {
        background: #fef0ef;
    }
    .mod-calendar table td.work.active a,.mod-calendar table td.work a:hover{
        border: calc(var(--base-size) * 1) solid #f44336;
    }
    .mod-calendar table td.work i {
        color: #f44336;
    }
    .mod-calendar table td.disabled a {
        opacity: 0.4;
    }
    .mode-simple .info{
        display: none;
    }
    .mode-simple .selector{
        background: none;
        text-align: center;
    }

    @container (max-width: 480px){
        .mod-calendar{
            flex-direction: column;
            font-size: calc(var(--base-size-mobile) * 12);
        }
        .mod-calendar .info{
            width: auto;
            padding-top: calc(var(--base-size-mobile) * 10);
            padding-left: calc(var(--base-size-mobile) * 10);
            overflow:hidden;
        }
        .mod-calendar .info p{
            text-align: left;
            line-height: calc(var(--base-size-mobile) * 18);
        }
        .mod-calendar .info .day{
            float: left;
            width: calc(var(--base-size-mobile) * 56);
            height: calc(var(--base-size-mobile) * 56);
            margin: calc(var(--base-size-mobile) * 6) 0;
            line-height: calc(var(--base-size-mobile) * 56);
            font-size: calc(var(--base-size-mobile) * 24);
        }
        .mod-calendar .info .detail{
            padding-top: calc(var(--base-size-mobile) * 5);
            margin-left: calc(var(--base-size-mobile) * 70);
            margin-bottom: calc(var(--base-size-mobile) * 10);
        }
        .mod-calendar .info .list{
            position: absolute;
            top: calc(var(--base-size-mobile) * 10);
            right: calc(var(--base-size-mobile) * 10);
            padding:0;
            border-top: none;
            text-aign: right;
        }
        .mod-calendar .info .list .item{
            padding: calc(var(--base-size-mobile) * 2) 0;
        }
        .mod-calendar .info .list ::slotted([slot="item"]) {
            padding: calc(var(--base-size-mobile) * 2) 0!important;
        }
        .mod-calendar .selector span{
            position: relative;
            width: 32%;
            border: calc(var(--base-size-mobile) * 1); solid #ebebeb;
            margin: 0;
            text-align: center;
            box-sizing: border-box;
        }
        .mod-calendar .selector span:has(.goback){
            display: none;
        }
        .mod-calendar .selector span:last-child{
            display: none;
        }
        .mod-calendar .selector select{
            float: none;
            border-color: transparent;
            padding-left:0;
        }
        .mod-calendar .selector a{
            position: absolute;
            top:0;
            background: none;
            border-color: transparent;
        }
        .mod-calendar .selector .prev{
            left: 0;
            border-right-color: transparent;
        }
        .mod-calendar .selector .next{
            right: 0;
            margin-right: 0;
            border-left-color: transparent;
        }
        .mod-calendar .selector .goback{
            position: absolute;
            top: calc(var(--base-size-mobile) * 75);
            right: calc(var(--base-size-mobile) * 10);
            height: calc(var(--base-size-mobile) * 20);
            background: #ffbb00;
            line-height: calc(var(--base-size-mobile) * 20);
            font-size: calc(var(--base-size-mobile) * 14);
            color: #fff;
            border-radius: calc(var(--base-size-mobile) * 3);
        }
        .mod-calendar .selector .goback:hover{
            border-color:#ffbb00;
            color: #fff;
        }
        .mod-calendar table tbody a{
            width: auto;
            line-height: calc(var(--base-size-mobile) * 18);
        }
        .mod-calendar table tr{
            border-top: none;
        }
        .mod-calendar table th, .mod-calendar table td{
            position: relative;
        }
        .mod-calendar table td{
            height: calc(var(--base-size-mobile) * 48);
            line-height: calc(var(--base-size-mobile) * 16);
        }
        .mod-calendar table .s2{
            font-size: calc(var(--base-size-mobile) * 12);
        }
    }
`);

export default sheet;