package boatinsurance.api.controllers;

import boatinsurance.api.components.Mapper;
import boatinsurance.api.entities.Claim;
import boatinsurance.api.models.CreateClaimDto;
import boatinsurance.api.services.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/claims")
public class ClaimController {
    @Autowired
    private Mapper mapper = new Mapper();

    private final ClaimService claimService;

    public ClaimController(ClaimService claimService) {
        this.claimService = claimService;
    }

    @GetMapping("")
    public List<Claim> get() {
        return claimService.findAll();
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public ResponseEntity<String> create (@RequestBody CreateClaimDto dto) {
        claimService.save(mapper.toEntity(dto));
        return ResponseEntity.ok("New claim created");
    }
}