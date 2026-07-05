export const {
    PORT = 2030,
    SAlT_ROUNDS = 10 //produccion = 10, test = 1 (El numero o alcance que tomara el numero hashedo o bcrypting). se debe tener cuidado ya que si se incrementa demasiado el numero, se demorara un poca mas el sistema.  
} = process.env