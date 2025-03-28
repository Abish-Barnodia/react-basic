function Student(props){
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student :{props.isStudent ?"yes":"No"}</p>

        </div>
    );



}
Student.propTypes ={
    
}
export default Student;