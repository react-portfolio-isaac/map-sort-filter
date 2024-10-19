function DessertsList(props) {
    let sorted = props.data
              .filter(i => Number(i.calories) < 500)
              .sort((a,b) => {
                return b.calories - a.calories;
              });
    function liList(data) {
      let l = data.map((item) => { return <li>{item.name} - {item.calories}</li> });
      return l;
    }
    return <ul>{liList(sorted)}</ul>;
  }
  
  export default DessertsList;
  