declare global {
    namespace NodeJS {
        interface Global {
            Config: 'test global value'
        }
    }
}
export default global;