import './style.css'

const List = ({list, onView, onEdit, onDelete, onChange}) => {

    return (
        <div className='row'>
            {
                list.map((item) =>{
                    return (
                        
                        <div className='col-4'>
                            <div key={item.id} className='user'>

                                <main className='user-main'>
                                    <h6>Name : {item.name}</h6>
                                    <div>Email : {item.email}</div>
                                </main>

                                <footer className='user-footer'>
                                    <button 
                                        className="btn btn-secondary btn-sm" 
                                        onClick = {() => {onView(item.id)}}
                                    >   
                                        View 
                                    </button>
                                    <button 
                                        className="btn btn-secondary btn-sm" 
                                        onClick = {() => {onEdit(item)}}
                                    >   
                                        Edit
                                    </button>

                                    <button className="btn btn-secondary btn-sm"
                                            data-bs-toggle='modal'
                                            data-bs-target='#modal-delete-user'
                                    > 
                                        Delete    
                                    </button>
                                    <div className='modal' id='modal-delete-user'>
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title"> Delete User?</h5>
                                                    </div>
                                                    
                                                    <div className="modal-footer">
                                                    <button
                                                            className="btn btn-danger btn-sm" 
                                                            onClick = {() => {onDelete(item.id)}}
                                                        >
                                                            Delete {item.name}
                                                        </button>
                                                        <button className="btn btn-secondary" data-bs-dismiss="modal"> Cancle </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </footer>
                                    
                            </div>
                        </div>
                    )
                })
            }         
        </div>
    )
}
export default List;