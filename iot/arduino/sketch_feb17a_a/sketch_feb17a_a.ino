byte sensorpir = 7;

void setup(){
  pinMode(sensorpir, INPUT);
  Serial.begin(9600);
}


void loop(){
  if(digitalRead(sensorpir) == HIGH){
    Serial.println("Hay movimiento");
    delay(300); 
  }
}
