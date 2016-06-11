![Squawk Logo](https://squawk.cc/logo.png)

# squawk.cc

Creating noise-as-a-service, as an act of civil disobedience, that attacks the wholesale surveillance of Australian citizens under the data retention program.

[Follow us on twitter](https://twitter.com/squawkcc), and [let us know you're squawk certified](https://twitter.com/intent/tweet?text=I'm+%40squawkcc+certified.+Are+you%3F+%23CivilDisobedience+%23DataRetention+https%3A%2F%2Fsquawk.cc)!

## Usage

### Manual

Deploying squawk is achieved simply by adding the following line to the head of your web sites:

`<script src="//squawk.cc/squawk.js"></script>`

Deploying this code will cause your web site visitors to make a single request to a random IP address, for every request that you serve with the script tag, in order to add noise to the logs being kept by Australian ISPs.

### Packages

You can install squawk as a package or module for various systems.

Drupal module: [squawk](https://www.drupal.org/project/squawk) modules for Drupal versions 5, 6, 7 and 8 are available.

Have you created a module or package you'd like to add to this list? Simply [create an issue](https://github.com/bendechrai/squawk/issues/new), or submit a [pull request to our GitHub repository](https://github.com/bendechrai/squawk).

## Things we want to do

*   Avert DDoSs (throttling requests)
*   Emulate real usage more closely:
    *   Delays with a couple of requests per page load
    *   Save the IP address in local storage to reuse over a couple of pages
*   [DONE] Add HTTPS (can you get us Let's Encrypt access?)</del>
*   Only run if the requestor is in Australia
*   [DONE] Only make requests to Australian IP addresses
*   Internationalise

## Contributors

Primary thanks need to go to [@mnemote](https://twitter.com/mnemote) for coming up with the idea and roping me in to creating it over a pint in Hobart. Partial thanks also to Hobart for the great beer!

Like it or not, products just aren't adopted if they don't look good. I'd like to thank [@kattekrab](https://twitter.com/kattekrab) for the logo, which not only reflects the project's onomatapoeic name perfectly, it's also a little cocky! See what I did there?

Thanks, also, to these awesome people for submitting pull requests to make the project better: [Rick Measham](https://github.com/RickMeasham).

## License

The [squawk source code](https://github.com/bendechrai/squawk) is © 2016 [Ben Dechrai](https://twitter.com/bendechrai), and made available under the [GPLv3](https://github.com/bendechrai/squawk/blob/master/LICENSE.md).

