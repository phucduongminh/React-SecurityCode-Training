package boatinsurance.api.models;

public class CreateClaimDto {
    private String description;
    private String location;
    private java.util.Date timeOfIncident;
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public java.util.Date getTimeOfIncident() {
        return timeOfIncident;
    }
    public void setTimeOfIncident(java.util.Date timeOfIncident) {
        this.timeOfIncident = timeOfIncident;
    } 
}
