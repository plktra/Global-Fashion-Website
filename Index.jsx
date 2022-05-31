const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

<img src="img/dressimg.jpg" alt="my dress"

<video src="videos" autoplay controls>
    <><source src="https://" type="video/virtual" /><iframe width="560" height="315" src="https://www.youtube.com/embed/LZ1h0Zj5gAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></>
class Index extends React.Component {
    render() {
        // Object Destructuring
        const { globalfashion } = this.props
        return (
            <DefaultLayout title="Index" name='Poornima'>
                <div>
                    <nav>
                        <a class='link' href="/global/new">Global Virtual Fashion Show</a>
                    </nav>
                    <ul>
                        {
                            global.map(global => {
                                return (
                                    <li key={global._id}>
                                        <p>The <a href={`/global/${global._id}`}>{global.name}'s</a> color is {clothing.color}.</p>
                                        <p>{clohing.ReadyToWear ? 'READY' : 'NOT READY'}</p>
                                        <form action={`/global/${global._id}?_method=DELETE`}  method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                 
                                        <button><a href={`/globalSession/${globalSession._id}/edit`}>{`Edit ${globalSession.name}`}</a></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index