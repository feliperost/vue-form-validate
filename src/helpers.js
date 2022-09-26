// funçao para mapear os campos&valores do state, para fazer o get() e set() dos campos que estiverem no seu store

export function mapFields(options) {
    const object = {}
    for (let x = 0; x < options.fields.length; x++) {
        const field = [options.fields[x]]
        object[field] = {
            get() {
                return this.$store.state[options.base][field]
            },
            set(value) {
                this.$store.commit(options.mutation, { [field]: [value] })
            }
        }
    }
    return object
}