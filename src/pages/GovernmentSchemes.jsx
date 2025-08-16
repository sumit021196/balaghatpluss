import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Divider } from '@mui/material';
import {
  AccountBalance,
  Agriculture,
  School,
  LocalHospital,
  HomeWork,
  Work,
  DirectionsCar,
  Wc,
  EmojiPeople,
  AttachMoney,
  Gavel,
  WaterDrop,
  ElectricBolt
} from '@mui/icons-material';

const schemesBySector = [
  {
    sector: 'Agriculture',
    icon: <Agriculture sx={{ fontSize: 40, color: '#2e7d32' }} />,
    schemes: [
      {
        name: 'PM Kisan Samman Nidhi',
        description: 'Income support of ₹6,000 per year to all farmer families across the country in three equal installments of ₹2,000 every four months.',
        link: 'https://pmkisan.gov.in/'
      },
      {
        name: 'Pradhan Mantri Fasal Bima Yojana',
        description: 'Crop insurance scheme providing comprehensive coverage against crop failure, helping farmers cope with agricultural risks.',
        link: 'https://pmfby.gov.in/'
      },
      {
        name: 'Kisan Credit Card (KCC)',
        description: 'Provides farmers with timely access to credit for their agricultural needs at subsidized interest rates.',
        link: 'https://www.india.gov.in/spotlight/kisan-credit-card-kcc-scheme'
      }
    ]
  },
  {
    sector: 'Education',
    icon: <School sx={{ fontSize: 40, color: '#1565c0' }} />,
    schemes: [
      {
        name: 'PM Poshan Shakti Nirman',
        description: 'Provides nutritious meals to school children to improve their nutritional status and encourage school attendance.',
        link: 'https://pmposhan.education.gov.in/'
      },
      {
        name: 'National Means-cum-Merit Scholarship',
        description: 'Scholarship scheme to support meritorious students from economically weaker sections.',
        link: 'https://scholarships.gov.in/'
      },
      {
        name: 'PM Vidya Lakshmi',
        description: 'Single window for students to access educational loan and scholarship schemes.',
        link: 'https://www.vidyalakshmi.co.in/Students/'
      }
    ]
  },
  {
    sector: 'Healthcare',
    icon: <LocalHospital sx={{ fontSize: 40, color: '#c62828' }} />,
    schemes: [
      {
        name: 'Ayushman Bharat - PMJAY',
        description: 'Health insurance coverage of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
        link: 'https://pmjay.gov.in/'
      },
      {
        name: 'PM Ayushman Bharat Health Infrastructure Mission',
        description: 'Aims to strengthen healthcare infrastructure across the country.',
        link: 'https://pmab-him.nhp.gov.in/'
      },
      {
        name: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana',
        description: 'Provides quality generic medicines at affordable prices.',
        link: 'https://janaushadhi.gov.in/'
      }
    ]
  },
  {
    sector: 'Housing',
    icon: <HomeWork sx={{ fontSize: 40, color: '#5d4037' }} />,
    schemes: [
      {
        name: 'Pradhan Mantri Awas Yojana (PMAY)',
        description: 'Housing for All by 2022 - Providing affordable housing to the urban poor.',
        link: 'https://pmaymis.gov.in/'
      },
      {
        name: 'Pradhan Mantri Gramin Awaas Yojana',
        description: 'Aims to provide housing for all in rural areas by 2024.',
        link: 'https://pmayg.nic.in/'
      }
    ]
  },
  {
    sector: 'Employment',
    icon: <Work sx={{ fontSize: 40, color: '#ff8f00' }} />,
    schemes: [
      {
        name: 'PM SVANidhi Scheme',
        description: 'Provides working capital loan to street vendors to resume their livelihoods.',
        link: 'https://pmsvanidhi.mohua.gov.in/'
      },
      {
        name: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
        description: 'Skill development program for rural youth for employment in various sectors.',
        link: 'https://ddugky.gov.in/'
      },
      {
        name: 'PM MUDRA Yojana',
        description: 'Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.',
        link: 'https://www.mudra.org.in/'
      }
    ]
  },
  {
    sector: 'Women & Child Development',
    icon: <Wc sx={{ fontSize: 40, color: '#ad1457' }} />,
    schemes: [
      {
        name: 'Sukanya Samriddhi Yojana',
        description: 'Small savings scheme for girl child with tax benefits and high interest rate.',
        link: 'https://www.india.gov.in/spotlight/sukanya-samriddhi-account'
      },
      {
        name: 'PM Matru Vandana Yojana',
        description: 'Maternity benefit program providing financial assistance to pregnant women and lactating mothers.',
        link: 'https://pmmvy.nic.in/'
      },
      {
        name: 'Beti Bachao Beti Padhao',
        description: 'Campaign to generate awareness and improve the efficiency of welfare services for the girl child.',
        link: 'https://wcd.nic.in/bbbp-schemes'
      }
    ]
  },
  {
    sector: 'Social Security',
    icon: <EmojiPeople sx={{ fontSize: 40, color: '#6a1b9a' }} />,
    schemes: [
      {
        name: 'PM Kisan Maan Dhan Yojana',
        description: 'Pension scheme for small and marginal farmers providing ₹3,000 per month after 60 years of age.',
        link: 'https://maandhan.in/pmkmy/'
      },
      {
        name: 'Pradhan Mantri Shram Yogi Maan-dhan',
        description: 'Pension scheme for unorganized sector workers providing ₹3,000 per month after 60 years of age.',
        link: 'https://maandhan.in/sym/'
      },
      {
        name: 'National Social Assistance Programme',
        description: 'Provides financial assistance to elderly, widows and disabled persons living below poverty line.',
        link: 'https://nsap.nic.in/'
      }
    ]
  },
  {
    sector: 'Financial Inclusion',
    icon: <AttachMoney sx={{ fontSize: 40, color: '#2e7d32' }} />,
    schemes: [
      {
        name: 'PM Jan Dhan Yojana',
        description: 'Financial inclusion program ensuring access to financial services like banking, insurance, and pension.',
        link: 'https://pmjdy.gov.in/'
      },
      {
        name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana',
        description: 'Life insurance coverage of ₹2 lakh at premium of ₹330 per year.',
        link: 'https://www.jansuraksha.gov.in/'
      },
      {
        name: 'Pradhan Mantri Suraksha Bima Yojana',
        description: 'Accident insurance coverage of ₹2 lakh at premium of ₹12 per year.',
        link: 'https://www.jansuraksha.gov.in/'
      }
    ]
  },
  {
    sector: 'Legal & Rights',
    icon: <Gavel sx={{ fontSize: 40, color: '#37474f' }} />,
    schemes: [
      {
        name: 'PM Surakshit Matritva Abhiyan',
        description: 'Provides free health check-ups and required treatment for pregnant women.',
        link: 'https://pmsma.nhp.gov.in/'
      },
      {
        name: 'Pradhan Mantri Matru Vandana Yojana',
        description: 'Maternity benefit program for pregnant and lactating women.',
        link: 'https://pmmvy.nic.in/'
      }
    ]
  },
  {
    sector: 'Water & Sanitation',
    icon: <WaterDrop sx={{ fontSize: 40, color: '#0288d1' }} />,
    schemes: [
      {
        name: 'Jal Jeevan Mission',
        description: 'Ensures piped water supply to all rural households by 2024.',
        link: 'https://jaljeevanmission.gov.in/'
      },
      {
        name: 'Swachh Bharat Mission',
        description: 'Nationwide campaign to eliminate open defecation and improve solid waste management.',
        link: 'https://swachhbharatmission.gov.in/'
      }
    ]
  },
  {
    sector: 'Energy',
    icon: <ElectricBolt sx={{ fontSize: 40, color: '#ff8f00' }} />,
    schemes: [
      {
        name: 'PM Surya Ghar: Muft Bijli Yojana',
        description: 'Subsidy for installing rooftop solar panels to promote renewable energy.',
        link: 'https://pmsuryaghar.gov.in/'
      },
      {
        name: 'Ujjwala Yojana',
        description: 'Provides free LPG connections to women from below poverty line families.',
        link: 'https://pmuy.gov.in/'
      }
    ]
  }
];

const GovernmentSchemes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Government Schemes
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Explore various government schemes across different sectors for citizens' welfare
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {schemesBySector.map((sector, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box 
                sx={{ 
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                {sector.icon}
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  {sector.sector}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {sector.schemes.map((scheme, schemeIndex) => (
                  <Box key={schemeIndex} mb={schemeIndex < sector.schemes.length - 1 ? 3 : 0}>
                    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                      {scheme.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {scheme.description}
                    </Typography>
                    <a 
                      href={scheme.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#1976d2',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        '&:hover': {
                          textDecoration: 'underline',
                        }
                      }}
                    >
                      Learn more →
                    </a>
                    {schemeIndex < sector.schemes.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GovernmentSchemes;
