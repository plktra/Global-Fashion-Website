const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.globalfashion)
        const fruit = this.props.globalfashion
        return (
            <DefaultLayout title="Show">
                <div>
                    <p class="content">The {typeofclothing.name}'s color is {clothing.color}.</p>
                    <p>
                        {
                            globalfashion.readyToWear
                                ?
                                "It's ready to wear"
                                :
                                "It's ready to show...Rip the runway"
                        }
                    </p>
                    <button><a href={'/globalfashion'}>Back</a></button>
                    <hr />
                    <form action={`/globalfashion/${globalfashion._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/globalfashion/${globalfashion._id}/edit`}>{`Edit ${global.name}`}</a></button>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show