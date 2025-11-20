# Paved Road Language and Tooling Standards

!!! info

    **Status**: Proposed

    **Level**: 3

    **Updated**: 2025-11-20

## Summary

This ADR establishes DHCW's "Paved Road"—a curated, supported default technology stack designed to reduce cognitive load, minimize fragmentation, and accelerate delivery across the organisation. In response to strategic imperatives around Cloud First architecture, DevSecOps adoption, AI-assisted development, and legacy modernisation, we define a standardised set of languages and tooling.

The selected stack comprises **C# (.NET Core)** for enterprise backend, **Python** for scripting and data science, **Rust** for high-performance systems, **TypeScript** for frontend development, **OpenTofu** for Infrastructure as Code, and **Just** for task orchestration. 

This decision encompasses not only programming languages but also Developer Experience (DevEx) tooling, recognising that onboarding efficiency and developer productivity are critical success factors for a modern engineering organisation.

## Drivers

### Strategic Alignment with Cloud First and DevSecOps

* We are transitioning to a Cloud First architecture that demands languages and tools with strong cloud-native ecosystem support, containerisation capabilities, and seamless CI/CD integration.
* Our DevSecOps transformation requires tooling that embeds security throughout the software development lifecycle, supports automated testing, and enables infrastructure-as-code practices.

### AI-Assisted Development Readiness

* A major strategic goal is to leverage AI coding agents (e.g., GitHub Copilot, Claude) to accelerate development velocity and improve code quality.
* Languages with large training corpora in Large Language Model (LLM) datasets receive more accurate, contextually-aware AI assistance. C#, Python, and TypeScript dominate public code repositories (GitHub, Stack Overflow, documentation) and consequently have the highest AI-readiness scores.
* Standardising on these languages maximises the return on investment in AI tooling licences and reduces the risk of AI-generated code errors.

### Legacy Modernisation Imperative

* We carry significant technical debt in legacy applications that must be modernised to meet contemporary security, maintainability, and cloud-deployment requirements.
* The selected stack must provide clear migration paths from languages like Delphi, including the potential to leverage AI agents for transpiling business logic to modern equivalents.
* C# presents the most natural migration target for Delphi developers due to syntactic similarities (both are strongly-typed, Pascal-influenced languages) and Microsoft ecosystem familiarity.

### Talent Acquisition and Retention Strategy

* Our headquarters in Cardiff, Wales, presents both constraints and opportunities compared to larger tech hubs like London.
* C# developers are well-represented in the Cardiff market due to the strong Microsoft presence in South Wales and the output of local universities (Cardiff University, University of South Wales) which include .NET in their curricula.
* While the Rust developer pool is smaller, offering Rust projects serves as a strategic differentiator to attract high-calibre engineers seeking modern, technically challenging work—countering the perception that Cardiff roles are limited to legacy maintenance.

### Open Architecture and Vendor Independence

* As a public sector body, we must ensure long-term freedom from vendor lock-in and maintain sovereignty over our technology choices.
* The recent licensing change of Terraform from MPL to Business Source License (BSL) creates a risk for a public organisation that may need to modify, distribute, or integrate IaC tooling without commercial constraints.
* OpenTofu, operating under the MPL license with Linux Foundation governance, provides the necessary assurances for public sector adoption.

### Developer Experience and Onboarding Efficiency

* Fragmentation across multiple build systems, scripting languages, and deployment tools increases cognitive load and extends onboarding time for new engineers.
* A consistent "Paved Road" with standardised tooling (including task runners) enables engineers to move between projects with minimal context-switching overhead.
* This scope explicitly includes DevEx tooling like task runners, not just programming languages, recognising their critical role in day-to-day developer workflows.

## Options

### Core Enterprise Backend Languages

#### C# (.NET Core)

C# is a statically-typed, object-oriented language developed by Microsoft. .NET Core (now .NET 5+) is the cross-platform, open-source runtime that supports cloud-native development, containerisation, and high-performance server workloads. It features strong typing, LINQ, async/await patterns, and extensive tooling support.

* [Microsoft .NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
* [.NET Foundation](https://dotnetfoundation.org/)

#### Go (Golang)

Go is a statically-typed, compiled language developed by Google, designed for simplicity and efficiency. It features built-in concurrency primitives, fast compilation, and a minimalist standard library. Popular for cloud-native tooling (Kubernetes, Docker) and microservices.

* [Go Documentation](https://go.dev/doc/)

#### Java

Java is a mature, statically-typed, object-oriented language with a vast ecosystem. It runs on the JVM and features enterprise frameworks (Spring), strong backwards compatibility, and extensive library support.

* [Oracle Java Documentation](https://docs.oracle.com/en/java/)
* [Spring Framework](https://spring.io/)

### Infrastructure as Code Tools

#### OpenTofu

OpenTofu is an open-source fork of Terraform, maintained under the Linux Foundation. It uses HCL (HashiCorp Configuration Language) and provides declarative infrastructure provisioning across multiple cloud providers. Licensed under MPL 2.0.

* [OpenTofu Documentation](https://opentofu.org/docs/)
* [OpenTofu GitHub](https://github.com/opentofu/opentofu)

#### Bicep

Bicep is Microsoft's domain-specific language for deploying Azure resources. It provides a cleaner syntax than ARM templates and compiles to ARM JSON. It is Azure-specific and tightly integrated with the Azure ecosystem.

* [Bicep Documentation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/)

#### Terraform

Terraform is HashiCorp's original IaC tool. As of August 2023, it transitioned from MPL to the Business Source License (BSL), which restricts competitive use and creates licensing uncertainty for organisations that may build upon or redistribute the tooling.

* [Terraform Documentation](https://www.terraform.io/docs)

### Task Runners and Build Orchestration

#### Just

Just is a command runner (not a build system) that provides a convenient way to save and run project-specific commands. It features a simple, Make-like syntax without the complexity of Make's dependency resolution, and works consistently across Windows, macOS, and Linux.

* [Just Repository](https://github.com/casey/just)
* [Just Manual](https://just.systems/man/en/)

#### Make

Make is the traditional Unix build tool using Makefiles. It features powerful dependency resolution but has complex syntax, inconsistent behaviour across platforms (GNU Make vs BSD Make), and requires careful tab/space handling.

* [GNU Make Documentation](https://www.gnu.org/software/make/manual/)

#### PowerShell

PowerShell is Microsoft's task automation framework combining a command-line shell with a scripting language. It is powerful for Windows automation but historically had weaker Linux support and verbose syntax for simple tasks.

* [PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)

### Scripting and Data Science

#### Python

Python is a dynamically-typed, interpreted language with clear syntax and extensive ecosystem support. It dominates data science (NumPy, Pandas, scikit-learn), machine learning (TensorFlow, PyTorch), and automation/scripting use cases. It has one of the largest presences in LLM training data.

* [Python Documentation](https://docs.python.org/)

### High-Performance and Systems Programming

#### Rust

Rust is a systems programming language focused on safety, speed, and concurrency. It provides memory safety without garbage collection through its ownership system, making it suitable for performance-critical and security-sensitive applications.

* [Rust Documentation](https://doc.rust-lang.org/)
* [Rust Book](https://doc.rust-lang.org/book/)

### Frontend Development

#### TypeScript

TypeScript is a statically-typed superset of JavaScript developed by Microsoft. It compiles to JavaScript and provides type safety, better tooling support, and improved maintainability for large-scale frontend applications. It has extensive LLM training coverage due to its dominance in modern web development.

* [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Options Analysis

### Backend Language Assessment

#### C# (.NET Core) Assessment

**Pro:**

* **Existing estate integration**: Native compatibility with our existing Microsoft ecosystem, including Azure services, Active Directory, and SQL Server. Minimal impedance mismatch with current infrastructure.
* **Migration path from Delphi**: Strong syntactic and conceptual similarities to Delphi (both descended from Object Pascal traditions). Delphi developers can transfer skills more readily than to Go or Java.
* **AI assistance quality**: C# has excellent representation in GitHub public repositories and Stack Overflow, providing high-quality training data for AI coding assistants. Copilot provides accurate, idiomatic C# suggestions.
* **Cardiff talent availability**: Strong local talent pool due to Microsoft's South Wales presence and university programme alignment. Easier recruitment than niche languages.
* **Type system strength**: Rich type system with generics, nullable reference types, pattern matching, and records. Catches errors at compile time and improves refactoring safety.
* **Cross-platform maturity**: .NET 6+ runs production workloads on Linux containers with performance comparable to Go and Java. No longer Windows-only.
* **DevSecOps tooling**: Excellent static analysis (Roslyn analysers), security scanning (DevSkim, Security Code Scan), and CI/CD integration.

**Con:**

* **Microsoft association**: Some perception (increasingly outdated) of vendor lock-in to Microsoft ecosystem.
* **Runtime footprint**: Larger base container images than Go, though mitigated by trimmed/AOT publishing options.

**Other:**

* The .NET ecosystem's rapid evolution (annual major releases) requires ongoing investment in keeping skills current, but also provides access to modern language features.

#### Go (Golang) Assessment

**Pro:**

* **Simplicity**: Minimal language features reduce learning curve and codebase variance.
* **Fast compilation**: Near-instant builds improve developer feedback loops.
* **Small binaries**: Statically-linked executables are ideal for containers.
* **Concurrency model**: Goroutines and channels provide elegant concurrency primitives.

**Con:**

* **Error handling verbosity**: Explicit error returns lead to repetitive boilerplate.
* **Limited migration affinity**: Go's idioms are substantially different from Delphi; steeper migration learning curve for existing developers.
* **Smaller Cardiff talent pool**: Go developers are less common in the Cardiff market; would require more London-based or remote hiring.
* **Framework ecosystem**: Less mature web framework ecosystem compared to ASP.NET Core.

**Other:**

* Go is excellent for specific use cases (CLI tools, Kubernetes operators) but not well-suited as a primary enterprise backend language for our context.

#### Java Assessment

**Pro:**

* **Mature ecosystem**: Vast library ecosystem, proven at scale, and strong enterprise adoption.
* **Talent availability**: Large global talent pool with many experienced developers.
* **JVM performance**: Modern JVMs provide excellent runtime performance with JIT compilation.

**Con:**

* **Developer experience**: More verbose than C# (though improving with recent versions). Slower IDE feedback loops.
* **Boilerplate**: Even with Lombok and modern Java, more ceremony than C# for equivalent functionality.
* **No existing investment**: We have no current Java estate; adopting Java would introduce a parallel ecosystem alongside our C# codebase rather than building on existing strengths.
* **Delphi migration friction**: Java idioms differ significantly from Delphi patterns; no natural migration path.
* **Build tooling complexity**: Gradle/Maven build systems add complexity compared to dotnet CLI.

**Other:**

* Java would be reasonable for a greenfield organisation but offers no strategic advantage over C# given our existing Microsoft investment and Delphi modernisation requirements.

### Infrastructure as Code Assessment

#### OpenTofu Assessment

**Pro:**

* **Open source licensing (MPL 2.0)**: Ensures freedom to use, modify, and distribute without commercial restrictions. Critical for public sector organisations.
* **Linux Foundation governance**: Vendor-neutral stewardship provides confidence in long-term project health and community direction.
* **Cloud agnostic**: Single language/tool for AWS, Azure, GCP, and other providers. Supports genuine multi-cloud strategies.
* **Terraform compatibility**: Drop-in replacement for Terraform; existing knowledge and modules transfer directly.
* **Provider ecosystem**: Access to the full Terraform provider ecosystem (Azure, AWS, GitHub, Kubernetes, etc.).
* **State management**: Mature state locking and remote backend support for team collaboration.

**Con:**

* **Nascent ecosystem**: As a fork (established late 2023), some uncertainty about long-term provider support and community growth, though Linux Foundation backing mitigates this.
* **HCL learning curve**: Teams familiar only with ARM/Bicep must learn HCL syntax.

**Other:**

* The transition from Terraform to OpenTofu for existing infrastructure is straightforward; state files and configurations are compatible.

#### Bicep Assessment

**Pro:**

* **Azure-native**: First-class Azure integration with automatic resource type support and excellent Azure Portal integration.
* **Simplified syntax**: Cleaner than ARM templates with better readability and type inference.
* **No state management**: Relies on Azure's deployment model; no separate state file to manage.
* **Microsoft support**: Direct support from Microsoft with guaranteed compatibility.

**Con:**

* **Azure lock-in**: Cannot provision non-Azure resources. Precludes multi-cloud strategies and hybrid scenarios involving AWS, GCP, or other providers.
* **Limited ecosystem**: No community modules comparable to Terraform/OpenTofu registries.
* **Vendor dependency**: Tied entirely to Microsoft's product direction and licensing decisions.
* **Portability concerns**: Skills and configurations do not transfer to non-Azure environments.

**Other:**

* Bicep is appropriate for Azure-only organisations with no multi-cloud aspirations, but creates unacceptable lock-in for a public sector body requiring strategic flexibility.

#### Terraform (BSL) Assessment

**Pro:**

* **Market leader**: Largest user base, most extensive documentation, and strongest community support.
* **Mature tooling**: Terraform Cloud, Sentinel policies, and enterprise features.

**Con:**

* **Business Source License**: The BSL license restricts competitive use cases and creates legal uncertainty for organisations that may need to build tooling on top of Terraform or offer managed services.
* **Licensing risk**: HashiCorp's licensing change demonstrates willingness to modify terms; future restrictions cannot be ruled out.
* **Public sector concerns**: BSL's restrictions conflict with public sector open architecture principles and may complicate procurement.

**Other:**

* Terraform remains technically excellent, but the licensing model is inappropriate for public sector adoption. OpenTofu provides equivalent functionality with appropriate licensing.

### Task Runner Assessment

#### Just Assessment

**Pro:**

* **Cross-platform consistency**: Identical behaviour on Windows, macOS, and Linux. Critical for teams with mixed development environments.
* **Clean syntax**: Simple, intuitive syntax without Make's arcane rules (tabs vs spaces, pattern rules, automatic variables).
* **Focused purpose**: A command runner, not a build system. Does one thing well without unnecessary complexity.
* **Parameter support**: Built-in support for positional and named parameters, default values, and environment variables.
* **Excellent documentation**: Comprehensive manual with clear examples.
* **Active development**: Regular releases with responsive maintainer.

**Con:**

* **Limited adoption**: Less widely known than Make or PowerShell; requires initial team education.
* **No dependency resolution**: Unlike Make, does not track file dependencies. Not suitable as a build system (but that's not its purpose).

**Other:**

* Just excels as "glue" for invoking other tools consistently across projects. Combine with language-specific build tools (dotnet, npm, cargo) rather than replacing them.

#### Make Assessment

**Pro:**

* **Universal availability**: Pre-installed on virtually all Unix-like systems.
* **Dependency tracking**: Sophisticated file dependency and incremental build support.
* **Industry standard**: Decades of use in open-source projects; familiar to many developers.

**Con:**

* **Windows support**: Requires MSYS2, Cygwin, or WSL on Windows; inconsistent behaviour across Make implementations.
* **Arcane syntax**: Tabs vs spaces significance, complex automatic variables ($@, $<, $^), and pattern rules create steep learning curve.
* **Inconsistent implementations**: GNU Make vs BSD Make differences cause cross-platform issues.
* **Not designed for task running**: Optimised for builds with file dependencies; overkill for simple command orchestration.

**Other:**

* Make remains appropriate for C/C++ projects with complex build dependencies but is unnecessarily complex for task running in modern polyglot environments.

#### PowerShell Assessment

**Pro:**

* **Windows integration**: Deep integration with Windows, .NET, and Microsoft ecosystem.
* **Object pipeline**: Rich object-based pipeline processing, superior to text-based Unix tools for structured data.
* **Cross-platform**: PowerShell Core runs on Linux and macOS.
* **Scripting power**: Full programming language capabilities when needed.

**Con:**

* **Verbose syntax**: Simple tasks require significant boilerplate compared to Just or Make.
* **Linux cultural friction**: While technically cross-platform, PowerShell idioms feel foreign to Linux developers and are not widely adopted in the Linux ecosystem.
* **Performance overhead**: Slower startup than native tools for simple command execution.
* **Overkill for simple tasks**: Full scripting language is unnecessary for invoking a handful of project commands.

**Other:**

* PowerShell excels for complex Windows automation and .NET scripting but is too heavyweight for simple, cross-platform task running.

## Recommendation

We recommend adopting the following "Paved Road" as DHCW's supported default technology stack:

| Category | Selection | Primary Rationale |
|----------|-----------|-------------------|
| **Core Enterprise Backend** | C# (.NET Core) | Existing estate integration, Cardiff talent availability, Delphi migration affinity, AI assistance quality |
| **Scripting & Data Science** | Python | Industry standard, exceptional AI assistance, data science ecosystem |
| **High Performance / Systems** | Rust | Memory safety without GC, performance-critical workloads, talent attraction differentiator |
| **Infrastructure as Code** | OpenTofu | Open source licensing (MPL), cloud agnostic, public sector appropriateness |
| **Frontend** | TypeScript | Type safety, Microsoft tooling, AI assistance quality, industry standard |
| **Task Runner / Orchestration** | Just | Cross-platform consistency, clean syntax, appropriate scope for task running |

### Rationale

**C# (.NET Core) for Enterprise Backend** emerges as the clear choice due to the confluence of multiple decision drivers. It integrates seamlessly with our existing Microsoft estate, minimising migration risk and leveraging existing investment. The Cardiff talent market has strong C# representation, making recruitment sustainable. Crucially, C# provides the most natural migration path from Delphi—both languages share Object Pascal heritage, strongly-typed design, and similar idioms. C# also enjoys excellent AI assistance due to its substantial presence in LLM training data, directly supporting our AI-accelerated development strategy. While Go offers simplicity and Java offers ecosystem scale, neither addresses our specific context as effectively as C#.

**Python for Scripting and Data Science** is effectively the industry default for these domains. Its dominance in data science libraries (Pandas, NumPy, scikit-learn), machine learning frameworks (PyTorch, TensorFlow), and automation makes it the obvious choice. Python's prevalence in public code repositories ensures excellent AI coding assistance. No serious alternative exists for this category.

**Rust for High-Performance Systems** represents a strategic investment in both technical excellence and talent acquisition. Rust's ownership model provides memory safety guarantees without garbage collection overhead, making it suitable for performance-critical and security-sensitive components. While the Rust talent pool is smaller than C# or Python, this scarcity is precisely why offering Rust projects serves as a talent attractor. High-calibre engineers actively seek opportunities to work with Rust; offering such roles differentiates DHCW in the Cardiff market and counters perceptions that roles are limited to legacy maintenance. Rust is reserved for appropriate use cases (performance-critical services, security components, WebAssembly) rather than general application development.

**OpenTofu for Infrastructure as Code** is the responsible choice for a public sector organisation. The MPL license and Linux Foundation governance provide the vendor independence and long-term freedom essential for public sector technology sovereignty. OpenTofu's cloud-agnostic nature supports genuine multi-cloud strategies and avoids Azure lock-in that Bicep would impose. The BSL licensing of Terraform creates unacceptable legal and strategic uncertainty. OpenTofu provides equivalent functionality with appropriate licensing.

**TypeScript for Frontend** combines JavaScript's ubiquity with static typing's safety. It dominates modern frontend development, enjoys excellent tooling (VS Code integration, particularly given Microsoft's authorship), and has strong AI assistance due to its prevalence in public repositories. For any organisation doing web frontend work, TypeScript is the contemporary standard.

**Just for Task Orchestration** provides the cross-platform consistency essential for teams spanning Windows and Linux development environments. Its clean syntax and focused scope (command running, not build system) reduce complexity compared to Make while avoiding PowerShell's verbosity. Just serves as the universal "glue" that invokes language-specific tools consistently across all projects.

### Consequences

**Positive Outcomes:**

* **Reduced cognitive load**: Engineers can move between projects with consistent tooling, languages, and patterns. Onboarding time decreases significantly.
* **Maximised AI assistance ROI**: Standardising on languages with high AI-readiness (C#, Python, TypeScript) ensures accurate AI suggestions and justifies investment in Copilot/AI licences.
* **Sustainable talent pipeline**: C# and Python alignment with Cardiff university programmes and local market ensures reliable recruitment. Rust projects attract ambitious engineers seeking modern technical challenges.
* **Accelerated Delphi modernisation**: C#'s affinity with Delphi enables use of AI agents to assist with transpiling business logic, accelerating legacy migration timelines.
* **Public sector appropriateness**: OpenTofu's open-source licensing satisfies public sector procurement and open architecture requirements.
* **Cloud First readiness**: All selected technologies have strong cloud-native support, containerisation compatibility, and CI/CD integration.
* **DevSecOps alignment**: The stack supports security-embedded development with strong static analysis, dependency scanning, and automated testing capabilities.

**Accepted Costs and Risks:**

* **Rust learning curve**: Rust has a notoriously steep learning curve due to its ownership model and borrow checker. This investment is justified by the long-term ROI in memory safety (eliminating entire classes of security vulnerabilities), performance (GC-free efficiency for appropriate workloads), and talent attraction. We mitigate this through targeted training, pairing junior Rust developers with experienced mentors, and reserving Rust for appropriate use cases rather than mandating it for all systems work.
* **OpenTofu ecosystem maturity**: As a late-2023 fork, OpenTofu's ecosystem is newer than Terraform's. We accept minor risk of provider lag, mitigated by Linux Foundation backing and active community development. The licensing benefits substantially outweigh this risk.
* **Just adoption requires education**: Teams unfamiliar with Just require initial training. This cost is modest given Just's simplicity and is recovered through improved cross-platform consistency.
* **Stack discipline required**: The Paved Road only delivers value if teams actually use it. Exceptions should be rare, justified, and approved through architectural governance.

**Other Considerations:**

* This decision does not mandate exclusive use of these technologies. Specific projects may require deviations (e.g., a mobile app in Swift/Kotlin, an embedded system in C). Such exceptions should be documented with clear rationale and approved through the ADR process.
* The "Paved Road" concept means these technologies receive priority for training investment, tooling support, library curation, and CI/CD pipeline templates. Teams choosing non-Paved technologies accept responsibility for their own enablement.
* Database technologies (SQL Server, PostgreSQL, Redis, etc.) and messaging systems (RabbitMQ, Azure Service Bus, etc.) are out of scope for this ADR and addressed separately.

### Confirmation

**Implementation Verification:**

* New projects will be reviewed at inception to confirm Paved Road technology selection or document justified exceptions.
* Repository templates will be created for each Paved Road technology with standard project structure, CI/CD pipelines, linting configuration, and Just recipes.
* Engineering onboarding documentation will be updated to reference the Paved Road and explain the rationale.

**Ongoing Compliance:**

* Quarterly architecture reviews will audit technology usage across the estate and identify drift from the Paved Road.
* The Technical Design Assurance Group (TDAG) will maintain an exceptions register for approved deviations with documented rationale.
* Automated scanning (e.g., GitHub repository analysis) will track language distribution and flag unapproved technology adoption.

**Success Metrics:**

* Reduction in time-to-productivity for new engineers (target: 50% reduction in onboarding time to first meaningful commit).
* Increase in Copilot acceptance rate for Paved Road languages vs. non-Paved (demonstrating AI-readiness hypothesis).

**Accountability:**

* TDAG is responsible for ongoing governance and exception management.
* Technical Leads are responsible for ensuring their teams follow the Paved Road within their domains.

## More Information

### Decision Participants

This ADR was developed through consultation with:

* ... 

### Re-evaluation Triggers

This decision should be re-evaluated if:

* Microsoft makes material changes to .NET licensing or strategy
* The Cardiff tech job market shifts significantly (e.g., major employer exit/entry)
* AI coding assistant capabilities change such that language training data size becomes less relevant
* OpenTofu fails to maintain ecosystem parity with Terraform
* A compelling alternative emerges in any category

### Related Decisions

* Cloud Provider Workload Placement (related: cloud-agnostic IaC supports multi-cloud strategy)
* Containerization (related: all Paved Road languages support containerised deployment)

### References

* [OpenTofu Manifesto](https://opentofu.org/manifesto/)
* [Terraform BSL License FAQ](https://www.hashicorp.com/license-faq)
* [GitHub State of the Octoverse](https://octoverse.github.com/) (language popularity data)
* [Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey) (language adoption trends)
* [Rust Memory Safety Guarantees](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
