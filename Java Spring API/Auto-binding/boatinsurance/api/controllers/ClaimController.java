package boatinsurance.api.controllers;

import boatinsurance.api.entities.Claim;
import boatinsurance.api.services.ClaimService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/claims")
public class ClaimController {

    private final ClaimService claimService;

    public ClaimController(ClaimService claimService) {
        this.claimService = claimService;
    }

    @GetMapping("")
    public List<Claim> get() {
        return claimService.findAll();
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public ResponseEntity<String> create (@RequestBody Claim claim) {
        claimService.save(claim);
        return ResponseEntity.ok("New claim created");
    }
}
