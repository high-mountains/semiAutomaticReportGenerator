
const PageWrapper = (props) => {
    return(
            <div className={'printUnit page font'}
            style={{ 
                borderWidth: '1rem', 
                borderColor: 'rgba(0,0,0,0.1)', 
                borderRadius: '2rem', 
                position: 'relative', 
                paddingTop: '30rem', 
                paddingLeft: '30rem', 
                paddingRight: '30rem', 
                color: '#484F51' 
              }}>
                {props.children}
            </div>
    )
}

export default PageWrapper;