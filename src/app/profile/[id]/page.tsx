export default function UserProfilePage({params} : any){
    return (
        <div>
            <h1>User Profile <strong>{params.id}</strong></h1>
            <hr />
        </div>
    )
}