import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    height: 300px;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: right;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    margin: 0 auto;
    height: 300px;
    float: right;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 208px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 10px
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 300px;
    text-align: center;
    margin-top: 60px
`;

export const WriterTitle = styled.div`
    text-align: left;
    height: 20px;
    font-size: 14px;
    color: #969696;
    .switch {
        float: right;
        cursor: pointer;
    }
`;

export const WriterList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding: 0;
`;

export const WriterItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img {
            width: 100%;
            height: 100%；
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
        text-decoration: none;
    }
    .attention {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        text-decoration: none;
    }
    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;