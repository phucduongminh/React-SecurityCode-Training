package boatinsurance.api.components;

import org.springframework.stereotype.Component;
import boatinsurance.api.entities.Claim;
import boatinsurance.api.models.CreateClaimDto;

@Component
public class Mapper {
    public Claim toEntity (CreateClaimDto dto){
        var claim = new Claim();
        claim.setDescription(dto.getDescription());
        claim.setLocation(dto.getLocation());
        claim.setTimeOfIncident(dto.getTimeOfIncident());
        return claim;
    }
}